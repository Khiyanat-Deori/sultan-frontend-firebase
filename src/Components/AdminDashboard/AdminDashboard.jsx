import React, { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { db, auth } from "../firebase"; 
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { Toaster } from "react-hot-toast";
import ViewAppointments from "./ViewAppointments";
import { ThreeDots } from "react-loader-spinner"; 

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [view, setView] = useState("total");
  const [totalAppointments, setTotalAppointments] = useState([]);
  const [todaysAppointments, setTodaysAppointments] = useState([]);
  const [tomorrowsAppointments, setTomorrowsAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const checkAuth = () => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (!user) {
          navigate("/login");
        }
      });

      return () => unsubscribe();
    };

    checkAuth();
  }, [navigate]);

  useEffect(() => {
    setLoading(true);
    
    // Getting today's date and tomorrow's date in "YYYY-MM-DD" format
    const today = new Date();
    const todayString = today.toISOString().split("T")[0];

    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    const tomorrowString = tomorrow.toISOString().split("T")[0];

    const appointmentsRef = collection(db, "appointments");

    // Real-time listener for total appointments
    const totalUnsubscribe = onSnapshot(query(appointmentsRef), (snapshot) => {
      const totalAppointmentsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTotalAppointments(totalAppointmentsData);
      setLoading(false);
    }, (error) => {
      console.error("Failed to fetch total appointments", error);
      setError("Error fetching data");
      setLoading(false);
    });

    // Real-time listener for today's appointments
    const todaysUnsubscribe = onSnapshot(query(
      appointmentsRef,
      where("date", "==", todayString)
    ), (snapshot) => {
      const todaysAppointmentsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTodaysAppointments(todaysAppointmentsData);
    }, (error) => {
      console.error("Failed to fetch today's appointments", error);
      setError("Error fetching data");
    });

    // Real-time listener for tomorrow's appointments
    const tomorrowsUnsubscribe = onSnapshot(query(
      appointmentsRef,
      where("date", "==", tomorrowString)
    ), (snapshot) => {
      const tomorrowsAppointmentsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTomorrowsAppointments(tomorrowsAppointmentsData);
    }, (error) => {
      console.error("Failed to fetch tomorrow's appointments", error);
      setError("Error fetching data");
    });

    // Cleanup listeners on component unmount
    return () => {
      totalUnsubscribe();
      todaysUnsubscribe();
      tomorrowsUnsubscribe();
    };
  }, []);

  const handleViewChange = (newView) => {
    setView(newView);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  if (loading) {
    return (
      <div className="loading-spinner-container">
        <ThreeDots 
          height="80" 
          width="80" 
          color="#2c3e50" 
          ariaLabel="loading"
        />
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  const todaysAppointmentsCount = todaysAppointments.length || 0;
  const tomorrowsAppointmentsCount = tomorrowsAppointments.length || 0;
  const totalAppointmentsCount = totalAppointments.length || 0;

  return (
    <>
      <Toaster />
      <section className="dashboard-container">
        <header className="dashboard-header">
          <div className="dashboard-logo">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/sultanhospital-e244e.appspot.com/o/2k2uZJnfpNf8bqSij2bGGno1zCA.svg?alt=media&token=1623d17e-0375-47e7-bdc3-19d5f6ef99e6"
              alt="Sultan Hospital Logo"
            />
            <h1>Sultan Hospital</h1>
          </div>
          <div className="dashboard-logout_btn" onClick={handleLogout}>
            Logout
          </div>
        </header>
        <main className="dashboard-main">
          <div className="welcome-message">
            <h2>Welcome Admin!</h2>
          </div>
        </main>
        <div className="dashboard-card-container">
          <div className="dash_card" onClick={() => handleViewChange("todays")}>
            <div className="card__content">
              <div className="card__count">{todaysAppointmentsCount}</div>
            </div>
            <div className="card__description">
              <b>Appointments Today</b>
            </div>
          </div>
          <div className="dash_card" onClick={() => handleViewChange("tomorrows")}>
            <div className="card__content">
              <div className="card__count">{tomorrowsAppointmentsCount}</div>
            </div>
            <div className="card__description">
              <b>Appointments Tomorrow</b>
            </div>
          </div>
          <div className="dash_card" onClick={() => handleViewChange("total")}>
            <div className="card__content">
              <div className="card__count">{totalAppointmentsCount}</div>
            </div>
            <div className="card__description">
              <b>Total Appointments</b>
            </div>
          </div>
          <div className="dash_card" onClick={() => navigate("/create")}>
            <div className="card__content">
              <div className="card__count">Create</div>
            </div>
            <div className="card__description">
              <b>Appointment</b>
            </div>
          </div>
        </div>
      </section>
      {view === "total" && (
        <ViewAppointments
          data={totalAppointments}
          title="Total Appointments"
        />
      )}
      {view === "todays" && (
        <ViewAppointments
          data={todaysAppointments}
          title="Today's Appointments"
        />
      )}
      {view === "tomorrows" && (
        <ViewAppointments
          data={tomorrowsAppointments}
          title="Tomorrow's Appointments"
        />
      )}
      <Outlet />
    </>
  );
};

export default AdminDashboard;

