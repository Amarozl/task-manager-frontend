import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const taskAPI = {
  create: (data) => api.post("/tasks", data),
  getAll: () => api.get("/tasks"),
  getById: (id) => api.get(`/tasks/${id}`),
  complete: (id) => api.patch(`/tasks/${id}/complete`),
  delete: (id) => api.delete(`/tasks/${id}`),
  getByCategory: (categoryId) => api.get(`/tasks/by-category/${categoryId}`),
};

export const categoryAPI = {
  create: (data) => api.post("/categories", data),
  getAll: () => api.get("/categories"),
  getById: (id) => api.get(`/categories/${id}`),
  update: (id, data) => api.patch(`/categories/${id}`, data),
  delete: (id) => api.delete(`/categories/${id}`),
};

export default api;
