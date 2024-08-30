import styled from "styled-components";
import DatePicker from "react-datepicker"; // Import the date picker library
import "react-datepicker/dist/react-datepicker.css";

export const AppointmentFormStyled = styled.form`
  border-radius: 20px;
  box-shadow:
    0 4px 4px rgba(0, 0, 0, 0.25),
    0 4px 4px rgba(0, 0, 0, 0.25),
    2px 4px 8px #fff;
  border: 2px solid #686d76;
  background-color: #fff;
  display: flex;
  max-width: 500px; /* Increase the width */
  flex-direction: column;
  font-size: 16px; /* Increase the font size */
  color: #0000;
  font-weight: 400;
  padding: 30px 60px; /* Increase the padding */
`;

export const InputGroupStyled = styled.div`
  display: flex;
  gap: 12px; /* Increase the gap */
  margin-top: 24px; /* Increase the margin */

  &:first-child {
    margin-top: 0;
  }
`;


export const IconStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;  /* Increase the width */
  height: 40px; /* Set a height to maintain aspect ratio */
  color: #686d76;
  font-size: 1.8em; /* Increase the icon size */
  margin: auto 0 18px 0; /* Adjust margin for alignment */
`;

export const InputLabelStyled = styled.input`
  font-family:
    Open Sans,
    sans-serif;
  flex-grow: 1;
  flex-basis: auto;
  margin: auto 0 20px 0; /* Add bottom margin to increase spacing */
  padding: 8px;
  font-size: 16px;
  border: none; /* Remove all borders */
  border-bottom: 2px solid #000000; /* Add bottom border */
  outline: none; /* Remove the default outline on focus */
  max-width: 210px;

  &:focus {
    border-bottom-color: #ce4141; /* Ensure the bottom border color remains on focus */
  }
`;

export const SubmitButtonStyled = styled.button`
  border-radius: 5px;
  box-shadow:
    0 4px 4px rgba(0, 0, 0, 0.25),
    0 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #0D567E;
  align-self: center;
  margin-top: 30px; /* Increase the margin */
  color: #ffffff;
  justify-content: center;
  padding: 12px 18px; /* Increase the padding */
  border: 2px solid #686d76;
  font-weight: 700;
  cursor: pointer;
  transition-duration: 0.4s;
  &:hover {
    background-color: #399918;
    color: #ffffff;
  }
  font-family:
    Open Sans,
    sans-serif;
`;

export const SelectStyled = styled.select`
  font-family:
    Open Sans,
    sans-serif;
  flex-grow: 1;
  flex-basis: auto;
  margin: auto 0 24px 0; /* Add bottom margin to increase spacing */
  padding: 8px;
  font-size: 16px;
  border: none;
  border-bottom: 2px solid #000000; /* Add a bottom border only */
  outline: none; /* Remove the default outline on focus */
  max-width: 210px;

  &:focus {
    border-bottom-color: #ce4141; /* Change bottom border color on focus */
  }
`;

export const OptionStyled = styled.option`
  color: #000;
  padding: 8px;
`;

export const CustomDatePicker = styled(DatePicker)`
  font-family:
    Open Sans,
    sans-serif;
  flex-grow: 1;
  flex-basis: auto;
  margin: auto 0 24px 0; /* Add bottom margin to increase spacing */
  padding: 8px;
  font-size: 16px;
  border: none;
  border-bottom: 2px solid #000000;
  outline: none;
  max-width: 210px;

  &:focus {
    border-bottom-color: #ce4141;
  }
`;

export const ErrorMessageStyled = styled.div`
  color: red;
  font-size: 12px;
  margin-left: 60px;
  margin-top: 5px;
  margin-bottom: 10px; // Add some space below the error message
`;
