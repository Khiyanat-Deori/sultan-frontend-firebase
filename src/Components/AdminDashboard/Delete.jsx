import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { db } from "../firebase";
import { doc, deleteDoc } from "firebase/firestore";
import toast from "react-hot-toast";

const Delete = ({ appointmentId}) => {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    async () => {
      const docRef = doc(db, "appointments", appointmentId);
      await deleteDoc(docRef);
    },
    {
      onSuccess: () => {
        toast.success("Appointment deleted successfully", {
          duration: 2000,
          style: {
            fontSize: "18px",
            minWidth: "350px",
          },
        });
        queryClient.invalidateQueries("totalAppointments");
        queryClient.invalidateQueries("todaysAppointments");
        queryClient.invalidateQueries("tomorrowsAppointments");
      },
      onError: (error) => {
        toast.error(`Error: ${error.message}`, {
          duration: 1200,
          style: {
            fontSize: "18px",
            minWidth: "350px",
          },
        });
      },
    }
  );

  return (
    <button
      className="form-container_delete-btn"
      onClick={() => {
        if (window.confirm("Are you sure you want to delete this appointment?")) {
          mutation.mutate();
        }
      }}
      disabled={mutation.isLoading}
    >
      {mutation.isLoading ? "Deleting..." : "Delete"}
    </button>
  );
};

export default Delete;
