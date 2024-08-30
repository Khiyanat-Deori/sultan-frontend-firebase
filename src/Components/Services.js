import React from 'react';
import './services.css'; 
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';

const servicesData = [
  {
    title: "ICU",
    imageSrc: "https://firebasestorage.googleapis.com/v0/b/sultanhospital-e244e.appspot.com/o/hospital-intensive-care-stockcake.jpg?alt=media&token=ae23efcc-8edc-4609-974b-fd85d913e4de",
    description: "Intensive care units cater to patients with severe or life-threatening illnesses and injuries, which require constant care, close supervision from life support equipment and medication in order to ensure normal bodily functions. They are staffed by highly trained physicians, nurses, and respiratory therapists who specialize in caring for critically ill patients."
  },
  {
    title: "NICU",
    imageSrc: "https://firebasestorage.googleapis.com/v0/b/sultanhospital-e244e.appspot.com/o/neonatal-care-moment-stockcake.jpg?alt=media&token=90057d2a-d3ea-4dd3-950e-b8f4f73f0046",
    description: "The Neonatal Intensive Care Unit is divided into several areas, including a critical care area for babies who require close monitoring and intervention, an intermediate care area for infants who are stable but still require specialized care, and a step down unit where babies who are ready to leave the hospital can receive additional care before being discharged."
  },
  {
    title: "OPERATION THEATER",
    imageSrc: "https://firebasestorage.googleapis.com/v0/b/sultanhospital-e244e.appspot.com/o/surgical-team-focused-stockcake.jpg?alt=media&token=cdf4bb36-cc8d-4ff3-bebd-aad7703d57f1",
    description: "An operation theater (also known as an operating room (OR)) is a facility within a hospital where surgical operations are carried out in an aseptic environment."
  },
  {
    title: "PHYSIOTHERAPY",
    imageSrc: "https://firebasestorage.googleapis.com/v0/b/sultanhospital-e244e.appspot.com/o/therapeutic-back-massage-stockcake.jpg?alt=media&token=7e389f3a-675e-44fb-b435-5e8442afe293",
    description: "Physical therapy addresses the illnesses or injuries that limit a person’s abilities to move and perform functional activities in their daily lives."
  },
  {
    title: "ULTRASOUND (COLOR DOPPLER 3D/4D)",
    imageSrc: "https://firebasestorage.googleapis.com/v0/b/sultanhospital-e244e.appspot.com/o/medical-ultrasound-scan-stockcake.jpg?alt=media&token=bad15c86-51ad-4d18-a550-8e1db835a98b",
    description: "Diagnostic sonography (ultrasonography) is an ultrasound-based diagnostic imaging technique used to visualize subcutaneous body structures including tendons, muscles, joints, vessels and internal organs for possible pathology or lesions."
  },
  {
    title: "CT-SCAN",
    imageSrc: "https://firebasestorage.googleapis.com/v0/b/sultanhospital-e244e.appspot.com/o/ct-scan-procedure-stockcake.jpg?alt=media&token=2f0af805-4aad-4891-8c02-f8dab305ae6d",
    description: "Computerized tomography (CT) scan combines a series of X-ray images taken from different angles around your body and uses computer processing to create cross-sectional images (slices) of the bones, blood vessels and soft tissues inside your body."
  },
  {
    title: "PATHOLOGICAL LABORATORY",
    imageSrc: "https://firebasestorage.googleapis.com/v0/b/sultanhospital-e244e.appspot.com/o/lab-sample-analysis-stockcake.jpg?alt=media&token=8c816edb-01a9-4b75-bfe3-4569eece35f5",
    description: "A Pathology Laboratory is a Laboratory where tests are carried out on clinical specimens to obtain information about the health of a PATIENT to aid in diagnosis, treatment, and prevention of disease."
  },
  {
    title: "DIGITAL X-RAY",
    imageSrc: "https://firebasestorage.googleapis.com/v0/b/sultanhospital-e244e.appspot.com/o/xray-2048x1152.jpg?alt=media&token=9052fc4b-0628-49af-9434-523af3056f1d",
    description: "A digital X-ray, or digital radiography, is a modern type of X-ray that utilises digital sensors instead of photographic film, as with a traditional X-ray. The image captured is converted to digital data immediately and is available for review within seconds."
  },
  {
    title: "ECG",
    imageSrc: "https://firebasestorage.googleapis.com/v0/b/sultanhospital-e244e.appspot.com/o/digital-heart-concept-stockcake.jpg?alt=media&token=e8a5c9f9-3b98-4c64-85c0-5a46b7c88142",
    description: "An electrocardiogram (ECG) is a simple test that can be used to check your heart’s rhythm and electrical activity."
  },
];

const ServiceItem = ({ title, imageSrc, description }) => (
  <div>
    <div className="service-description">
      <h2>{title}</h2>
    </div>
    <div className="services-container">
      <div className="service-item">
        <div className="service-image">
          <img src={imageSrc} alt={`${title} Service`} />
        </div>
        <div className="service-description">
          <p>{description}</p>
        </div>
      </div>
    </div>
    <hr />
  </div>
);

const Services = () => {
  return (
    <>
      <Navbar />
      {servicesData.map(service => (
        <ServiceItem
          key={service.title}
          title={service.title}
          imageSrc={service.imageSrc}
          description={service.description}
        />
      ))}
      <Footer />
    </>
  );
}

export default Services;

