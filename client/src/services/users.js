import api from "./apiConfig.js"
import jwt_decode from "jwt-decode"

export const signUp = async (credentials) => {
  try {
    const response = await api.post("sign-up", credentials)
    localStorage.setItem("token", response.data.token)
    const user = jwt_decode(response.data.token)
    return user
  } catch (error) {
    throw error
  }
}

export const signIn = async (credentials) => {
  try {
    const response = await api.post("/sign-in", credentials)
    localStorage.setItem("token", response.data.token)
    const user = jwt_decode(response.data.token)
    return user
  } catch (error) {
    throw error
  }
}

export const signOut = async () => {
  try {
    localStorage.removeItem("token")
  } catch (error) {
    throw error
  }
}

export const verifyUser = async () => {
  const token = localStorage.getItem("token")
  if (token) {
    const response = await api.get("/verify")
    return response.data
  }
  return false
}