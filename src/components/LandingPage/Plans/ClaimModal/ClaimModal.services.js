import axios from 'axios';

export const claimVoucherRequest = async (payload) => {
  const request = await axios.post(
    `${process.env.REACT_APP_API_URL}/website/claim-voucher`,
    payload,
    { withCredentials: true }
  );

  try {
    return {
      success: true,
      data: request.data,
    };
  } catch (error) {
    return {
      success: true,
      data: error.message,
    };
  }
};
