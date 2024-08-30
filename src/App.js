import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./Components/AdminDashboard/AdminDashboard";
import NoMatch from "./Components/NoMatch";
import CreateAppointment from "./Components/AdminDashboard/CreateAppointment";
import LoginPage from "./Components/LoginPage/LoginPage";
import GlobalStyles from "./Components/Styles/GLobal";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import Services from "./Components/Services";
import Contact from "./Components/ContactUs";
import "./app.css";
import DoctorDetails from "./Components/DepartmentDetails/DoctorDetails";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/adminDashboard" element={<AdminDashboard />} />
        <Route path="/create" element={<CreateAppointment />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/doctors/:department" element={<DoctorDetails />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
};

export default App;
