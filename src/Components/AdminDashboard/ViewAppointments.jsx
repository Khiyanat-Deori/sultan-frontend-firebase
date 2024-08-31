import React from "react";
import Update from "./Update";
import Delete from "./Delete";
import { ThreeDots } from "react-loader-spinner";

const ViewAppointments = ({ data, title}) => {

  if (!data) {
    return (
      <div className="loading-spinner-container">
        <ThreeDots 
          height="80" 
          width="80" 
          color="#2c3e50" 
          ariaLabel="loading"
        />
      </div>
    );
  }

  return (
    <div className="tomorrow-apt__container">
      <div className="table-container">
        <h2>{title}</h2>
        <table className="table-look">
          <thead>
            <tr>
              <th className="th-column">S.No.</th>
              <th className="th-column">Name</th>
              <th className="th-column">Phone Number</th>
              <th className="th-column">Time Schedule</th>
              <th className="th-column">Date</th>
              <th className="th-column">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((appointment, index) => (
              <tr key={appointment._id}>
                <td className="td-row">{index + 1}</td>
                <td className="td-row">{appointment.patientName}</td>
                <td className="td-row">{appointment.phoneNumber}</td>
                <td className="td-row">{appointment.timeSchedule}</td>
                <td className="td-row">{appointment.date}</td>
                <td className="td-row">
                  <Update appointmentId={appointment.id} />
                  <Delete appointmentId={appointment.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewAppointments;

