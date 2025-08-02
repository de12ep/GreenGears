import axios from "axios";

class PaymentService {
      initiatePayment=async(paymentURL) =>{
        try {
        const response = await axios.get(paymentURL);
        return response.data;
        } catch (error) {
        console.error("Payment initiation failed:", error);
        
        }
    }
    
    async verifyPayment(paymentId) {
        try {
        const response = await axios.get(`http://localhost:9191/api/payment/verify/${paymentId}`);
        return response.data;
        } catch (error) {
        console.error("Payment verification failed:", error);
        throw error;
        }
    }
    }
export default new PaymentService();