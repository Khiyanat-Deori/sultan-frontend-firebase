import axios from "axios";
import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";
import useAuth from "./useAuth";

const URL = "http://localhost:5000";

export const axiosPrivate = axios.create({
  baseURL: URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
})

const useAxiosInterceptor = () => {
  const refresh = useRefreshToken()
  const { auth } = useAuth()

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          const accessToken = auth?.accessToken || localStorage.getItem("accessToken");
          if (accessToken) {
            config.headers["Authorization"] = `Bearer ${accessToken}`;
          }
        }
        return config
      },
      (error) => Promise.reject(error),
    )

    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config
        if (error?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true;
          const newAccessToken = await refresh();
          localStorage.setItem("accessToken", newAccessToken);
          prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return axiosPrivate(prevRequest);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept)
      axiosPrivate.interceptors.response.eject(responseIntercept)
    }
  }, [auth, refresh])

  return {
    axiosPrivate,
  }
}

export default useAxiosInterceptor;
