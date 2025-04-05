import axios from "axios";

/**
 * Logs in user with email/password and stores token in cookie (sent by backend).
 */
export const loginfunc = async (email, password) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/tum/auth/login",
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true, // 💡 THIS enables cookies!
      }
    );

    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Login failed" };
  }
};
