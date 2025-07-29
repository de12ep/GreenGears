import axiosInstance from "./axiosInstance";

class EquipmentService {
  Signin = async (data) => {
    const res = await axiosInstance.post("/user/signin", data);
    return res.data; // { token, role }
  };

  getAllEquipment = async () => {
    const res = await axiosInstance.get("/ms2/equipment");
    return res;
  };

  uploadEquipment = async (data) => {
    const res = await axiosInstance.post("/ms2/equipment", data);
    return res;
  };

  deleteEquipment = async (id) => {
    const res = await axiosInstance.delete(`/ms2/equipment/${id}`);
    return res;
  };
}

export default new EquipmentService();
