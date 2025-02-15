import axios from "axios";
import { saveToken, removeToken, getToken } from "./authStore";
import { API_BASE_URL } from "@env";

export async function login(email: string, password: string) {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, {
      email,
      password,
    });
    const { token } = response.data;

    await saveToken(token);
    return token;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Login failed");
  }
}

export async function register(email: string, password: string) {
  try {
    await axios.post(`${API_BASE_URL}/auth/register`, { email, password });
    return true;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Registration failed");
  }
}

export async function logout() {
  await removeToken();
}

export async function fetchWithAuth(
  endpoint: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  data?: any
) {
  try {
    const token = await getToken();
    const response = await axios({
      url: `${API_BASE_URL}${endpoint}`,
      method,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data,
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Request failed");
  }
}
