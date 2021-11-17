import api from "./apiConfig.js"

export const getDrawings = async () => {
  try {
    const response = await api.get("/drawings")
    return response.data
  } catch (error) {
    throw error
  }
}

export const getDrawing = async (id) => {
  try {
    const response = await api.get(`/drawings/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
}

export const createDrawing = async (drawing) => {
  try {
    const response = await api.post("/drawings", drawing)
    return response.data
  } catch (error) {
    throw error
  }
}

export const editDrawing = async (id, drawing) => {
  try {
    const response = await api.put(`/drawings/${id}`, drawing)
    return response.data
  } catch (error) {
    throw error
  }
}

export const deleteDrawing = async (id) => {
  try {
    const response = await api.delete(`/drawings/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
}