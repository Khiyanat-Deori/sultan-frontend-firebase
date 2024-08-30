import React from "react";
import { useQuery } from "react-query";
import Update from "./Update";
import Delete from "./Delete";
import useAxiosInterceptor from "../../hooks/useAxiosInterceptor";
import { ThreeDots } from "react-loader-spinner";

const fetchAppointments = async (axiosPrivate, url) => {
  const { data } = await axiosPrivate.get(url);
  return data;
};

const ViewAppointments = ({ url, title }) => {
  const { axiosPrivate } = useAxiosInterceptor();

  const { data, error, isLoading, refetch } = useQuery(
    ["appointments", url],
    () => fetchAppointments(axiosPrivate, url),
  );

  if (isLoading) {
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
  if (error) return <div>Error: {error.message}</div>;

  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `${day}-${month}-${year}`;
    } catch (error) {
      console.error("Error formatting date:", error);
      return "";
    }
  };

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
                <td className="td-row">{formatDate(appointment.date)}</td>
                <td className="td-row">
                  <Update appointmentId={appointment._id} refetch={refetch} />
                  <Delete appointmentId={appointment._id} refetch={refetch} />
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


