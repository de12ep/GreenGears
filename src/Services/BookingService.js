import axiosInstance from "../Services/axiosInstance";

class BookingService {
  bookEquipment = async ( bookingData) => {
    const res = await axiosInstance.post(`/ms3/booking`, bookingData);
    return res.data;
  };

  getBookingsByUser = async () => {
    const res = await axiosInstance.get(`/ms3/booking`);
    return res.data;
  };

  cancelBooking = async (bookingId) => {
    const res = await axiosInstance.delete(`/ms3/booking/${bookingId}`);
    return res.data;
  };
}
export default new BookingService();