import axios from 'axios';

export const signUser = async (payload) => {
  const request = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/user/sign`,
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

export const getCurrentUser = async (token) => {
  const request = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/user/me`,
    { headers: { Authorization: `Bearer ${token}` } }
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
