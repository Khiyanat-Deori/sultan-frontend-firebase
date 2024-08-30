import React, { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import useAxiosInterceptor from "../../hooks/useAxiosInterceptor";
import ViewAppointments from "./ViewAppointments";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { BASE_URL } from "../../BaseUrl";
import { useQuery} from "react-query";
import { Toaster } from "react-hot-toast";


const fetchCount = async (axiosPrivate, url) => {
  try {
    const response = await axiosPrivate.get(url);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching appointments");
  }
};

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { axiosPrivate } = useAxiosInterceptor();
  const [view, setView] = useState("total");
  const { setAuth } = useAuth();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await axiosPrivate.get(`${BASE_URL}/api/admin/adminDashboard`);
      } catch (error) {
        if (error.response?.status === 401) {
          navigate("/login");
        }
      }
    };
    checkAuth();
  }, [axiosPrivate, navigate]);

  const { data: totalAppointments, error: totalAppointmentsError } = useQuery(
    "totalAppointments",
    () => fetchCount(axiosPrivate, `${BASE_URL}/api/form/view`)
  );

  const { data: todaysAppointments, error: todaysAppointmentsError } = useQuery(
    "todaysAppointments",
    () => fetchCount(axiosPrivate, `${BASE_URL}/api/form/todays-appointments`)
  );

  if (totalAppointmentsError || todaysAppointmentsError) {
    return <div>Error loading data</div>;
  }

  const handleViewChange = (newView) => {
    setView(newView);
  };

  const todaysAppointmentsCount = (todaysAppointments && todaysAppointments.length) || 0;
  const totalAppointmentsCount = (totalAppointments && totalAppointments.length) || 0;

  const handleLogout = async () => {
    try {
      await axios.post(
        `${BASE_URL}/api/admin/logout`,
        {},
        { withCredentials: true }
      );
      setAuth({});
      localStorage.removeItem("accessToken");
      navigate("/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

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
              <b>Appointments Today</b>{" "}
            </div>
          </div>
          <div className="dash_card" onClick={() => handleViewChange("tomorrows")}>
            <div className="card__content">
              <div className="card__count">View</div>
            </div>
            <div className="card__description">
              <b>Appointments Tomorrow</b>{" "}
            </div>
          </div>
          <div className="dash_card" onClick={() => handleViewChange("total")}>
            <div className="card__content">
              <div className="card__count">{totalAppointmentsCount}</div>
            </div>
            <div className="card__description">
              <b>Total Appointments</b>{" "}
            </div>
          </div>
          <div className="dash_card" onClick={() => navigate("/create")}>
            <div className="card__content">
              <div className="card__count">Create</div>
            </div>
            <div className="card__description">
              <b>Appointment</b>{" "}
            </div>
          </div>
        </div>
      </section>
      {view === "total" && (
        <ViewAppointments
          url={`${BASE_URL}/api/form/view`}
          title="Total Appointments"
        />
      )}
      {view === "todays" && (
        <ViewAppointments
          url={`${BASE_URL}/api/form/todays-appointments`}
          title="Today's Appointments"
        />
      )}
      {view === "tomorrows" && (
        <ViewAppointments
          url={`${BASE_URL}/api/form/tomorrows-appointments`}
          title="Tomorrow's Appointments"
        />
      )}
      <Outlet />
    </>
  );
};

export default AdminDashboard;














