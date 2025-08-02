import axios from "axios";
import axiosInstance from "./axiosInstance";
const baseURL = "http://localhost:9191";
class EquipmentService {
  Signin = async (data) => {
    const res = await axios.post(`${baseURL}/user/signin`, data);
    return res.data; // { token, role }
  };
SignUp = async (data) => {
    const res = await axios.post(`${baseURL}/user/signup`, data);
    return res.data; // { token, role }
  };
  getAllEquipment = async () => {
    const res = await axios.get(`${baseURL}/ms2/equipment`);
    return res;
  };
   getAllOwnerEquipment = async () => {
    const res = await axiosInstance.get(`/ms2/equipment/myequipment`);
    return res;
  };
  getCurrentUser= async (token) => {
  const res = await axios.get("http://localhost:9191/user/users/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
}


  uploadEquipment = async (data) => {
    console.log(data); 
    

    const res = await axiosInstance.post(`/ms2/equipment/Tractor`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    return res;
  };

  deleteEquipment = async (id) => {
    const res = await axiosInstance.delete(`/ms2/equipment/${id}`);
    return res;
  };
}

export default new EquipmentService();
