// CONTROL + F KEYWORDS FOR SEARCH
//lOGIN
//DASH
//CREATE-FORM
//InputGroup
//formContainer-delete_btn
//update-Button

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');
  
  * {
      box-sizing: border-box;
  }

  body {
      font-family: 'Open Sans', sans-serif;
      font-size: .940rem;
      background-color: white;
      line-height: normal;
  }

  ul {
      background-color: white;
      list-style: none;
  }
  .login_container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  padding: 20px;
}
.login_back_btn {
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 0.5rem 1rem;
  background-color: transparent;
  color: #2c3e50;
  border: 1px solid #2c3e50;
  border-radius: 8px;
  font-size: 0.875rem;
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s,
    box-shadow 0.3s;
}
.login_back_button:hover {
  background-color: #2c3e50;
  color: white;
  box-shadow: 1px 3px 5px #34495e;
  border: 1px solid #2c3e50;
}

.login-form {
  background: white;
  padding: 2.5rem;
  border-radius: 15px;
  box-shadow:
    10px 10px 45px rgba(0, 0, 0, 0.1),
    -10px -10px 45px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 450px;
  text-align: center;
  transition:
    transform 0.3s,
    box-shadow 0.3s;
}
.login-form:hover {
  box-shadow:
    20px 20px 55px rgba(0, 0, 0, 0.15),
    -20px -20px 55px rgba(0, 0, 0, 0.15);
}

.login-form_title {
  margin-bottom: 2rem;
  font-size: 2rem;
  color: #2c3e50;
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
}
.login-form_input {
  width: 100%;
  padding: 0.875rem;
  margin-bottom: 1.25rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition:
    border-color 0.3s,
    box-shadow 0.3s;
}
.login-form_input:focus {
  border-color: #2c3e50;
  outline: none;
  box-shadow: 0 0 10px #2c3e50;
}

@media (max-width: 768px) {
  .login-form {
    padding: 2rem;
  }
}

@media (max-width: 480px) {
  .login-form {
    padding: 1.5rem;
  }
}

.login-submit-btn {
  width: 100%;
  padding: 0.875rem;
  background: #2c3e50;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s, box-shadow 0.3s;
  display: flex;
  justify-content: center;
  align-items: center; /* Center the spinner vertically */
  position: relative;
}
  
.login-submit-btn:hover {
  background: #1a252f;
  box-shadow: 1px 3px 5px #34495e;
}
.login-submit-btn:disabled {
  background: #bdc3c7;
  cursor: not-allowed;
}
//DASH
.dashboard-container {
  max-width: 1200px;
  margin: 0 auto -40px;
  padding: 20px;
}
.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background: #ffffff;
  border-radius: 24px;
}
.dashboard-logo {
  display: flex;
  align-items: center;
}
.dashboard-logo > h1 {
  font-size: 1.2rem;
  color: #333;
}
.dashboard-logo > img {
  width: 55px;
  height: 50px;
}
.dashboard-logout_btn {
  top: 20px;
  left: 20px;
  padding: 0.5rem 1rem;
  background-color: transparent;
  color: #2c3e50;
  border: 1px solid #2c3e50;
  border-radius: 8px;
  font-size: 0.875rem;
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s,
    box-shadow 0.3s;
}
.dashboard-logout_btn:hover {
  background-color: #2c3e50;
  color: white;
  box-shadow: 1px 3px 5px #34495e;
  border: 1px solid #2c3e50;
}

@media (max-width: 480px) {
  .dashboard-logout_btn {
    top: 10px;
    left: 10px;
    padding: 0.4rem 0.8rem;
    font-size: 0.75rem;
  }
}
.dashboard-main .welcome-message > h2 {
  font-size: 36px;
  font-weight: 700;
  color: #2c3e50;
}

/* ====== cards ===== */

.dashboard-card-container {
  display: flex;
  gap: 20px;
  width: 100%;
}
@media (max-width: 768px) {
  .dashboard-card-container {
    flex-direction: column;
    align-items: center;
  }
}
.dash_card {
  width: 100%;
  max-width: 270px;
  height: 100px;
  padding: 24px;
  background: #2c3e50;
  color: #bad7e9;
  border-radius: 12px;
  overflow: hidden;
  border-top: 1px solid rgb(2, 2, 2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  box-shadow: 2px solid #bad7e9;
}
.dash_card:hover {
  background: #1a252f;
  box-shadow: 1px 3px 5px #34495e;
}
.card__content {
  display: flex;
  align-items: center;
  gap: 14px;
}
.card__count {
  font-size: 32px;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 0.15px;
  word-wrap: break-word;
  color: white;
}
.card__description {
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.15px;
  word-wrap: break-word;
  z-index: 1;
  color: white;
}
.card__description > b {
  font-weight: 700;
}
//CREATE-FORM

.create-apt__back-btn {
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 0.5rem 1rem;
  background-color: transparent;
  color: #2c3e50;
  border: 1px solid #2c3e50;
  border-radius: 8px;
  font-size: 0.875rem;
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s,
    box-shadow 0.3s;
}
.create-apt__back-btn:hover {
  background-color: #2c3e50;
  color: white;
  box-shadow: 1px 3px 5px #34495e;
  border: 1px solid #2c3e50;
}
@media (max-width: 480px) {
  .create-apt__back-btn {
    top: 10px;
    left: 10px;
    padding: 0.4rem 0.8rem;
    font-size: 0.75rem;
  }
}

.create-apt__form {
  border-radius: 20px;
  box-shadow:
    0 4px 4px rgba(0, 0, 0, 0.25),
    0 4px 4px rgba(0, 0, 0, 0.25),
    2px 4px 8px #fff;
  border: 1px solid #ce4141;
  background-color: #fff;
  display: flex;
  max-width: 500px; /* Increase the width */
  flex-direction: column;
  font-size: 16px; /* Increase the font size */
  color: #000;
  font-weight: 400;
  padding: 30px 60px; /* Increase the padding */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.create-apt__submit-btn {
  text-shadow: 0 3px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  box-shadow:
    0 4px 4px rgba(0, 0, 0, 0.25),
    0 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #ce4141;
  align-self: center;
  margin-top: 30px; /* Increase the margin */
  color: #fff;
  justify-content: center;
  padding: 12px 18px; /* Increase the padding */
  font:
    600 16px Open Sans,
    sans-serif; /* Increase the font size */
  border: none;
  cursor: pointer;
}
/* InputGroup  */
.create-apt__inputGroup {
  display: flex;
  gap: 12px; /* Increase the gap */
  margin-top: 24px; /* Increase the margin */
}
.create-apt__inputGroup:first-child {
  margin-top: 0;
}
.inputGroup-select {
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
}
.inputGroup-select:focus {
  border-bottom-color: #ce4141; /* Change bottom border color on focus */
}
.inputGroup-option {
  color: #000;
  padding: 8px;
}
.inputGroup-datePicker {
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
}
.inputGroup-datePicker &:focus {
  border-bottom-color: #ce4141;
}
.inputGroup-labelStyle {
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
}
.inputGroup-labelStyle:focus {
  border-bottom-color: #ce4141; /* Ensure the bottom border color remains on focus */
}
.inputGroup-errMsg {
  color: red;
  font-size: 12px;
  margin-left: 60px;
  margin-top: 5px;
  margin-bottom: 10px;
}
//formContainer-delete_btn
.form-container_delete-btn {
  top: 20px;
  left: 20px;
  padding: 0.2rem 0.6rem;
  background-color: transparent;
  color: #2c3e50;
  border: 1px solid #2c3e50;
  border-radius: 8px;
  font-size: 0.875rem;
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s,
    box-shadow 0.3s;
}
.form-container_delete-btn:hover {
  background-color: #2c3e50;
  color: white;
  box-shadow: 1px 3px 5px #34495e;
  border: 1px solid #2c3e50;
}
@media (max-width: 480px) {
  .form-container_delete-btn {
    top: 10px;
    left: 10px;
    padding: 0.4rem 0.8rem;
    font-size: 0.75rem;
  }
}
// TommorrowsAppoint
.loading-spinner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full viewport height to center vertically */
}

.tomorrow-apt__container {
  max-width: 1200px;
  margin: 0 auto -40px;
  padding: 20px;
}
.table-container {
  padding-top: 20px;
}
.table-container > h2 {
  font-size: 20px;
  font-weight: 700;
  color: #2c3e50;
}
.table-look {
  font-family: "Plus Jakarta Sans", sans-serif;
  border-collapse: collapse;
  width: 100%;
}
.th-column {
  border: 1px solid #1a252f;
  text-align: left;
  padding: 8px;
}
.td-row {
  border: 1px solid #1a252f;
  text-align: left;
  padding: 8px;
}
//update-Button
.form-container__edit-btn {
  top: 20px;
  left: 20px;
  padding: 0.2rem 0.6rem;
  background-color: transparent;
  color: #2c3e50;
  border: 1px solid #2c3e50;
  border-radius: 8px;
  font-size: 0.875rem;
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s,
    box-shadow 0;
}
.form-container__edit-btn:hover {
  background-color: #2c3e50;
  color: white;
  box-shadow: 1px 3px 5px #34495e;
  border: 1px solid #2c3e50;
}
@media (max-width: 480px) {
  .form-container__edit-btn {
    top: 10px;
    left: 10px;
    padding: 0.4rem 0.8rem;
    font-size: 0.75rem;
  }
}


`;

export default GlobalStyles;
