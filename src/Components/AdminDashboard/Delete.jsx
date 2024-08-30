import React from "react";
import { useMutation, useQueryClient } from "react-query";
import useAxiosInterceptor from "../../hooks/useAxiosInterceptor";
import toast from "react-hot-toast";
import { BASE_URL } from "../../BaseUrl";

const Delete = ({ appointmentId, refetch }) => {
  const { axiosPrivate } = useAxiosInterceptor();
  const queryClient = useQueryClient();

  const mutation = useMutation(
    async () => {
      await axiosPrivate.delete(`${BASE_URL}/api/form/delete/${appointmentId}`);
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
        // Invalidate all relevant queries to ensure data consistency
        queryClient.invalidateQueries("totalAppointments");
        queryClient.invalidateQueries("todaysAppointments");
        queryClient.invalidateQueries("tomorrowsAppointments");
        refetch();
      },
      onError: (error) => {
        toast.error(
          `Error: ${error.response?.data?.message || error.message}`,
          {
            duration: 1200,
            style: {
              fontSize: "18px",
              minWidth: "350px",
            },
          }
        );
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

