import axios from 'axios';

export const createPaymentIntent = async (token, payload) => {
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/payment/intent`,
      payload,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return data;
  } catch (error) {
    return {
      success: false,
      data: error.message,
    };
  }
};
