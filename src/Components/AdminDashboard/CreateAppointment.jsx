import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import toast, { Toaster } from "react-hot-toast";
import { addDoc, collection, getDocs, query, where} from "firebase/firestore";
import { db } from "../firebase"; 
import inputData from "./inputData.js";
import InputGroup from "./inputGroup.jsx";
import { ThreeDots } from "react-loader-spinner"; 

const CreateAppointment = () => {
  const navigate = useNavigate();
  const initialFormValues = {
    fullName: "",
    phoneNumber: "",
    appointmentDate: new Date(new Date().getTime()),
    appointmentTime: "",
  };

  const [formValues, setFormValues] = useState(initialFormValues);
  const [reset, setReset] = useState(false);
  const [isLoading, setLoading] = useState(false); 

  const handleInputChange = (id, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  const mutation = useMutation(
    (newAppointment) => {
      setLoading(true);
      const appointmentsRef = collection(db, "appointments"); 
      return addDoc(appointmentsRef, newAppointment); 
    },
    {
      onSuccess: () => {
        setLoading(false);
        toast.success("Appointment created successfully!", {
          duration: 5000,
          style: {
            fontSize: "18px",
            minWidth: "350px",
          },
        });
        setFormValues(initialFormValues);
        setReset(true);
        setTimeout(() => setReset(false), 0);
        setTimeout(() => navigate("/adminDashboard"), 3000);
      },
      onError: (error) => {
        setLoading(false);
        toast.error(
          `Failed to create appointment: ${error.message}`,
          {
            duration: 5000,
            style: {
              fontSize: "18px",
              minWidth: "350px",
            },
          }
        );
      },
    }
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { phoneNumber, appointmentDate } = formValues;

    if (phoneNumber.length !== 10 || !/^[9876]/.test(phoneNumber)) {
      toast.error(
        "Please enter a valid 10 digit phone number",
        {
          duration: 5000,
          style: {
            fontSize: "18px",
            minWidth: "350px",
          },
        }
      );
      return;
    }

    const istDate = new Date(appointmentDate.getTime());
    const formattedDate = istDate.toISOString().split("T")[0]; 

  
    try {
      const appointmentsRef = collection(db, "appointments");
      const duplicateQuery = query(
        appointmentsRef,
        where("phoneNumber", "==", phoneNumber),
        where("date", "==", formattedDate) 
      );
      const querySnapshot = await getDocs(duplicateQuery);

      if (!querySnapshot.empty) {
        toast.error(
          "An appointment with this phone number and date already exists.",
          {
            duration: 5000,
            style: {
              fontSize: "18px",
              minWidth: "350px",
            },
          }
        );
        return;
      }

      
      const appointmentData = {
        patientName: formValues.fullName,
        phoneNumber: formValues.phoneNumber,
        date: formattedDate, 
        timeSchedule: formValues.appointmentTime,
      };

      mutation.mutate(appointmentData);
    } catch (error) {
      toast.error(`Failed to check for duplicate appointments: ${error.message}`, {
        duration: 5000,
        style: {
          fontSize: "18px",
          minWidth: "350px",
        },
      });
    }
  };


  return (
    <>
      <Toaster />
      <button
        className="create-apt__back-btn"
        onClick={() => navigate("/adminDashboard")}
      >
        Back to Dashboard
      </button>
      <form className="create-apt__form" onSubmit={handleSubmit}>
        {inputData.map((input, index) => (
          <InputGroup
            key={index}
            {...input}
            value={formValues[input.id]}
            onChange={handleInputChange}
            reset={reset}
          />
        ))}
        <button className="create-apt__submit-btn" type="submit" disabled={isLoading}>
          {isLoading ? (
            <ThreeDots 
              height="10" 
              width="80" 
              color="white" 
              ariaLabel="loading" 
            />
          ) : (
            "Create an Appointment"
          )}
        </button>
      </form>
    </>
  );
};

export default CreateAppointment;

