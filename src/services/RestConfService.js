import axios from "axios";

const BASE_URL = "http://127.0.0.1:5000/restconf/";

export const getConfig = async (fqdn) => {
  try {
    if (!fqdn) {
      throw new Error("FQDN is blank");
    }

    console.log(`Fetching config from URL: ${BASE_URL}${fqdn}`);

    const response = await axios.get(`${BASE_URL}${fqdn}`);

    // Check if the response has data
    if (!response.data) {
      throw new Error("No data received from the server");
    }

    const data = response.data;

    // Log the received data for debugging
    console.log("Received data:", data);

    return data;
  } catch (error) {
    console.error("Error fetching config:", error);
    throw error;
  }
};
