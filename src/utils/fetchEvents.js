import apiClient from "@/api/axios";

export async function fetchEvents() {
  try {
    const response = await apiClient.get("/displayevent");
    if (response.data.status.remarks !== "Success") {
      console.error("Failed to fetch events:", response.data.status.message);
      return [];
    }
    return response.data.payload || [];
  } catch (error) {
    console.error("Error fetching events:", error.message);
    return [];
  }
}