import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost/Event_Management_System/eventify_backend", // Replace with your backend URL
  headers: {
    "Content-Type": "application/json"
/*     'Content-Type': 'multipart/form-data' */
  }
});

export default apiClient;