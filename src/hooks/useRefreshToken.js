import axios from "axios";

const useRefreshToken = () => {
  const refresh = async () => {
    const response = await axios.get("http://localhost:5000/api/admin/refresh", {
      withCredentials: true,
    });
    const newAccessToken = response.data.newAccessToken;
    localStorage.setItem("accessToken", newAccessToken);
    return newAccessToken;
  };

  return refresh
}

export default useRefreshToken;
