import axios from "axios";

const API = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL ||
    "http://127.0.0.1:5000",
});

export const createInquiry = (payload) =>
  API.post("/api/inquiry", payload);

export const getInquiries = () =>
  API.get("/api/inquiry");

export const deleteInquiry = (id) =>
  API.delete(`/api/inquiry/${id}`);
