import AppForm from "../AppointmentForm/AppForm";
import "./Hero-Section.css";

const HeroSection = () => {
  return (
    <>
      <section className="section hero has-bg-image">
        <div className="container">
          <div className="hero-content">
            <p className="hero-text">
              Welcome to Sultan MultiSpeciality Hospital and Research Center
            </p>
            <h1 className="h1 hero-title">
              Leading HealthCare Excellence in Morigaon
            </h1>
            <br />
            <a className="call_us" href="tel:+91-8822686715">Click to Call Us</a>
          </div>
          <div className="form-container">
            <AppForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;

