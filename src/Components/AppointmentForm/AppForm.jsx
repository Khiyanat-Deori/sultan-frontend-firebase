import React, { useState, useEffect } from "react";
import axios from "axios";
import { useMutation } from "react-query";
import toast, { Toaster } from "react-hot-toast";
import { ThreeDots } from "react-loader-spinner"; 
import {
  AppointmentFormStyled,
  InputGroupStyled,
  IconStyled,
  InputLabelStyled,
  SubmitButtonStyled,
  SelectStyled,
  OptionStyled,
  CustomDatePicker,
  ErrorMessageStyled,
} from "./style";
import inputData from "./inputData";
import { BASE_URL } from "../../BaseUrl";

const InputGroup = ({
  icon,
  label,
  type,
  id,
  options,
  isDate,
  value,
  onChange,
  reset,
}) => {
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [isTouched, setIsTouched] = useState(false);

  useEffect(() => {
    if (reset) {
      setIsTouched(false);
      setIsPhoneValid(true);
    }
  }, [reset]);

  useEffect(() => {
    if (type === "tel" && isTouched) {
      setIsPhoneValid(value.length === 10 && /^[9876]/.test(value));
    }
  }, [value, type, isTouched]);

  const handleDateChange = (date) => {
    onChange(id, date);
  };

  const handlePhoneChange = (event) => {
    let newValue = event.target.value.replace(/\D/g, "");
    if (newValue.length > 10) {
      newValue = newValue.slice(0, 10);
    }
    setIsPhoneValid(newValue.length === 10 && /^[9876]/.test(newValue));
    onChange(id, newValue);
    setIsTouched(true); // Set the touched flag to true when the input is changed
  };

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    if (id === "fullName" && newValue.length > 40) {
      return;
    }

    onChange(id, newValue);
    if (type === "tel") setIsTouched(true); // Set the touched flag to true when the input is changed
  };

  return (
    <div>
      <InputGroupStyled>
      <IconStyled>{icon}</IconStyled>
        {type === "select" ? (
          <SelectStyled
            id={id}
            aria-label={label}
            required
            onChange={handleInputChange}
            value={value}
          >
            <option value="" disabled>
              {label}
            </option>
            {options.map((option, index) => (
              <OptionStyled key={index} value={option.value}>
                {option.label}
              </OptionStyled>
            ))}
          </SelectStyled>
        ) : isDate ? (
          <CustomDatePicker
            selected={value}
            onChange={handleDateChange}
            dateFormat="dd-MM-yyyy"
            minDate={new Date(new Date().getTime() + 24 * 60 * 60 * 1000)}
            required
          />
        ) : type === "tel" ? (
          <InputLabelStyled
            type={type}
            id={id}
            placeholder={label}
            aria-label={label}
            value={value}
            onChange={handlePhoneChange}
            pattern="\d*"
            required
          />
        ) : (
          <InputLabelStyled
            type={type}
            id={id}
            placeholder={label}
            aria-label={label}
            value={value}
            onChange={handleInputChange}
            required
          />
        )}
      </InputGroupStyled>
      {type === "tel" && !isPhoneValid && isTouched && (
        <ErrorMessageStyled>
          Please enter a 10 digit number starting with 9, 8, 7, or 6
        </ErrorMessageStyled>
      )}
    </div>
  );
};

const AppForm = () => {
  const initialFormValues = {
    fullName: "",
    phoneNumber: "",
    appointmentDate: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
    appointmentTime: "",
  };

  const [formValues, setFormValues] = useState(initialFormValues);
  const [reset, setReset] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state

  const handleInputChange = (id, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  const mutation = useMutation(
    (newAppointment) => {
      setLoading(true);
      return axios.post(`${BASE_URL}/api/form/create`, newAppointment);
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
      },
      onError: (error) => {
        setLoading(false);
        toast.error(
          `Failed to create appointment: ${error.response?.data?.message || error.message}`,
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

  const handleSubmit = (event) => {
    event.preventDefault();
    const { phoneNumber } = formValues;
    if (phoneNumber.length !== 10 || !/^[9876]/.test(phoneNumber)) {
      toast.error(
        "Please enter a valid 10 digit phone number starting with 9, 8, 7, or 6",
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
      <AppointmentFormStyled onSubmit={handleSubmit}>
        {inputData.map((input, index) => (
          <InputGroup
            key={index}
            {...input}
            value={formValues[input.id]}
            onChange={handleInputChange}
            reset={reset}
          />
        ))}
        <SubmitButtonStyled type="submit" disabled={loading}>
          {loading ? (
            <ThreeDots 
              height="10" 
              width="80" 
              color="white" 
              ariaLabel="loading" 
            />
          ) : (
            "Make an Appointment"
          )}
        </SubmitButtonStyled>
      </AppointmentFormStyled>
    </>
  );
};

export default AppForm;
