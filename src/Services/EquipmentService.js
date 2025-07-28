import axios from "axios";

const API_URL = "http://localhost:9191";

class EquipmentService {
  getAllEquipment = async () => {
    const response = await axios.get(`${API_URL}/ms2/equipment`);
    return response.data.data;
  };

  Signin = async (data) => {
    const response = await axios.post(`${API_URL}/user/signin`, data);
    return response.data;
  };
}

export default  new EquipmentService();
