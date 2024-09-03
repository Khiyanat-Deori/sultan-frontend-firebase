import styled from "styled-components";
import DatePicker from "react-datepicker";
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
  max-width: 500px;
  flex-direction: column;
  font-size: 16px;
  color: #0000;
  font-weight: 400;
  padding: 30px 60px;


  @media (max-width: 480px) {
    max-width: 420px; 
    padding: 25px 60px; 
    font-size: 14px; 
  }

  @media (max-width: 380px) {
    max-width: 420px; 
    padding: 25px 42px; 
    font-size: 14px; 
  }
  
`;

export const InputGroupStyled = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 24px;

  &:first-child {
    margin-top: 0;
  }
`;

export const IconStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: #686d76;
  font-size: 1.8em;
  margin: auto 0 18px 0;

  
`;

export const InputLabelStyled = styled.input`
  font-family: Open Sans, sans-serif;
  flex-grow: 1;
  flex-basis: auto;
  margin: auto 0 20px 0;
  padding: 8px;
  font-size: 16px;
  border: none;
  border-bottom: 2px solid #000000;
  outline: none;
  max-width: 210px;

  &:focus {
    border-bottom-color: #ce4141;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const SubmitButtonStyled = styled.button`
  border-radius: 5px;
  box-shadow:
    0 4px 4px rgba(0, 0, 0, 0.25),
    0 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #0d567e;
  align-self: center;
  margin-top: 30px;
  color: #ffffff;
  justify-content: center;
  padding: 12px 18px;
  border: 2px solid #686d76;
  font-weight: 700;
  cursor: pointer;
  transition-duration: 0.4s;

  &:hover {
    background-color: #399918;
    color: #ffffff;
  }

  font-family: Open Sans, sans-serif;

  
  @media (max-width: 480px) {
    font-size: 14px;
    padding: 10px 16px;
    margin-top: 20px;
  }
`;

export const SelectStyled = styled.select`
  font-family: Open Sans, sans-serif;
  flex-grow: 1;
  flex-basis: auto;
  margin: auto 0 24px 0;
  padding: 8px;
  font-size: 16px;
  border: none;
  border-bottom: 2px solid #000000;
  outline: none;
  max-width: 210px;

  &:focus {
    border-bottom-color: #ce4141;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const OptionStyled = styled.option`
  color: #000;
  padding: 8px;
`;

export const CustomDatePicker = styled(DatePicker)`
  font-family: Open Sans, sans-serif;
  flex-grow: 1;
  flex-basis: auto;
  margin: auto 0 24px 0;
  padding: 8px;
  font-size: 16px;
  border: none;
  border-bottom: 2px solid #000000;
  outline: none;
  max-width: 210px;

  &:focus {
    border-bottom-color: #ce4141;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const ErrorMessageStyled = styled.div`
  color: red;
  font-size: 12px;
  margin-left: 60px;
  margin-top: 5px;
  margin-bottom: 10px;

  @media (max-width: 480px) {
    margin-left: 30px;
    font-size: 11px;
  }
`;
