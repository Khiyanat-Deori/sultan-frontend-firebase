import React, { useState } from "react";
import axios from "axios";
import { useMutation } from "react-query";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import inputData from "./inputData.js";
import InputGroup from "./inputGroup.jsx";
import { BASE_URL } from "../../BaseUrl.js";
import { ThreeDots } from "react-loader-spinner"; // Import the spinner

const CreateAppointment = () => {
  const navigate = useNavigate();
  const initialFormValues = {
    fullName: "",
    phoneNumber: "",
    appointmentDate: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
    appointmentTime: "",
  };

  const [formValues, setFormValues] = useState(initialFormValues);
  const [reset, setReset] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // State to manage loading

  const handleInputChange = (id, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  const mutation = useMutation(
    (newAppointment) =>
      axios.post(
        `${BASE_URL}/api/form/create`,
        newAppointment
      ),
    {
      onMutate: () => {
        setIsLoading(true); // Set loading to true when mutation starts
      },
      onSuccess: () => {
        toast.success("Appointment created successfully!", {
          duration: 1000,
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
        toast.error(
          `Failed to create appointment: ${error.response?.data?.message || error.message}`,
          {
            duration: 3000,
            style: {
              fontSize: "18px",
              minWidth: "350px",
            },
          }
        );
      },
      onSettled: () => {
        setIsLoading(false); // Set loading to false after mutation finishes
      },
    }
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    const { phoneNumber } = formValues;
    if (phoneNumber.length !== 10 || !/^[9876]/.test(phoneNumber)) {
      toast.error(
        "Please enter a valid 10 digit phone number starting with 9, 8, 7, or 6",
        {
          duration: 3000,
          style: {
            fontSize: "18px",
            minWidth: "350px",
          },
        }
      );
      return;
    }
    const istDate = new Date(formValues.appointmentDate.getTime() + (5.5 * 60 * 60 * 1000));

    const appointmentData = {
      patientName: formValues.fullName,
      phoneNumber: formValues.phoneNumber,
      date: istDate,
      timeSchedule: formValues.appointmentTime,
    };
    mutation.mutate(appointmentData);
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
