import { useParams } from "react-router-dom";
import "./DoctorDetails.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useEffect } from "react";

const DoctorDetails = () => {
  const { department } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [department]);

  const doctors = {
    NEUROLOGY: [
      { name: "Dr. B.K. AGARWAL (MBBS, DNB NEUROSURGEON)", image: "https://firebasestorage.googleapis.com/v0/b/sultanhospital-e244e.appspot.com/o/BKAgarwal.jpg?alt=media&token=ba124e06-90d9-4f81-88f4-472b8d325eb7" },
    ],
    ENDOCRINOLOGY: [
      { name: "Dr. S.M.B. BARUAH (MBBS, MS, Mch ENDROCRINE SURGEON)", image: "https://firebasestorage.googleapis.com/v0/b/sultanhospital-e244e.appspot.com/o/SMBBarua.jpg?alt=media&token=2596d866-aacc-47d6-b07a-ec5a901c772a" },
    ],
    GASTROENTROLOGY: [
        { name: "Dr. K.S.RAO (GASTROENTROLOGIST, HEPATOLOGIST & ADVANCED THERAPEUTIC ENDOSCOPIST)", image: "https://firebasestorage.googleapis.com/v0/b/sultanhospital-e244e.appspot.com/o/K.S.Rao.jpg?alt=media&token=6c626d41-d738-43ed-8d99-8eda1ed97d97" },
    ],
    "EMERGENCY & CRITICAL CARE": [
        { name: "Dr. P.DEKA (MBBS, DA ANESTHESIOLOGIST)", image: "https://firebasestorage.googleapis.com/v0/b/sultanhospital-e244e.appspot.com/o/dummy-image.jpg?alt=media&token=c77efa12-fe5a-4ecb-ad26-82b466987f27" },
        { name: "Dr. K. AHMED (MBBS (C/C))", image: "https://firebasestorage.googleapis.com/v0/b/sultanhospital-e244e.appspot.com/o/K.Ahmed.jpg?alt=media&token=d9553fed-6783-4378-af5e-44135ef73f95" },
        { name: "Dr. Y. MAJUMDAR (MBBS, MD ANESTHESIOLOGIST)", image: "https://firebasestorage.googleapis.com/v0/b/sultanhospital-e244e.appspot.com/o/Y.Majumdar.jpg?alt=media&token=cbe760c2-ad32-4322-9e99-ba3a67ea13ac" },
    ],
    RMO: [
        { name: "Dr. MD. F. IQBAL (RMO)", image: "https://firebasestorage.googleapis.com/v0/b/sultanhospital-e244e.appspot.com/o/f.iqbal.jpg?alt=media&token=e424ae34-b188-444f-9213-8c9c3aef0d9b" },
    ],
    "OBSTETRICS & GYNECOLOGY": [
        { name: "Dr. G. C. DUTTA (MBBS, MD, DGO (GAU))", image: "https://firebasestorage.googleapis.com/v0/b/sultanhospital-e244e.appspot.com/o/G.C.Dutta.jpg?alt=media&token=b3196693-b25e-4832-b953-eb89d72d6f57" },
    ],
    "GENERAL SURGERY": [
        { name: "Dr. N. K. DEKA (MBBS, MS)", image: "https://firebasestorage.googleapis.com/v0/b/sultanhospital-e244e.appspot.com/o/N.K.deka.jpg?alt=media&token=7a066f56-1e43-4dbb-af1e-d20d8eb994c0" },
        { name: "Dr. S.BISWAS (MS(AYU), RMS)", image: "https://firebasestorage.googleapis.com/v0/b/sultanhospital-e244e.appspot.com/o/s.biswas.jpg?alt=media&token=421d33f5-53a3-4fd5-9cd2-9b2183ef2e76" },
    ],
    ORTHOPAEDICS: [
        { name: "Dr. P. KALITA (MBBS, MS)", image: "https://firebasestorage.googleapis.com/v0/b/sultanhospital-e244e.appspot.com/o/dummy-image.jpg?alt=media&token=c77efa12-fe5a-4ecb-ad26-82b466987f27" },
        { name: "Dr. K. R. PHOOKAN (MBBS, MS)", image: "https://firebasestorage.googleapis.com/v0/b/sultanhospital-e244e.appspot.com/o/dummy-image.jpg?alt=media&token=c77efa12-fe5a-4ecb-ad26-82b466987f27" },
    ],
    PATHOLOGY: [
        { name: "Dr. U. BAISHYA (MBBS, D.C.P)", image: "https://firebasestorage.googleapis.com/v0/b/sultanhospital-e244e.appspot.com/o/U.baishya.jpg?alt=media&token=6707e63d-f203-4c75-8943-ef4131b25c32" },
    ],
    "DENTAL SURGERY": [
        { name: "Dr. H. AGARWAL (BDS DENTAL SURGEON)", image: "https://firebasestorage.googleapis.com/v0/b/sultanhospital-e244e.appspot.com/o/H.agarwal.jpg?alt=media&token=29b9b5c5-79db-47ee-a1e8-fa7dbfd9d635" },
        { name: "Dr. A. BORTHAKUR (BDS DENTAL SURGEON)", image: "https://firebasestorage.googleapis.com/v0/b/sultanhospital-e244e.appspot.com/o/a.borthakur.jpg?alt=media&token=dafca6f6-067c-417c-a699-788146d112d4" },
    ],
  };

  const departmentDoctors = doctors[department.toUpperCase()];

  if (!departmentDoctors) {
    return <div>No doctors found for this department.</div>;
  }

  return (
    <>
    <Navbar/>
    <div className="doctor-details">
      <h2>Doctors in {department}</h2>
      <div className="doctor-list">
        {departmentDoctors.map((doctor, index) => (
          <div key={index} className="doctor-card">
            <h3>{doctor.name}</h3>
            <img src={doctor.image} alt={doctor.name} />
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default DoctorDetails;

