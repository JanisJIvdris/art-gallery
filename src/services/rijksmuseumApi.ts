import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_RIJKSMUSEUM_API_KEY;
const BASE_URL = "https://www.rijksmuseum.nl/api/en/collection";

export const fetchArtworks = async (limit = 3) => {
  try {
    // Generate a random page number between 1 and 100
    const randomPage = Math.floor(Math.random() * 100) + 1;

    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        format: "json",
        ps: limit, // Limit number of artworks to fetch
        p: randomPage, // Request artworks from a random page
        imgonly: true, // Only artworks with images
      },
    });
    return response.data.artObjects || [];
  } catch (error) {
    console.error("Error fetching artworks:", error);
    throw error;
  }
};

export const fetchArtDetail = async (artId: string) => {
  try {
    // Remove any "en-" prefix from the ID before making the request
    const cleanId = artId.replace(/^en-/, ""); // Remove the "en-" prefix if present

    const response = await axios.get(`${BASE_URL}/${cleanId}`, {
      params: {
        key: API_KEY,
        format: "json",
      },
    });

    const artObject = response.data.artObject || null;

    if (artObject) {
      return {
        title: artObject.longTitle || "Unknown Title",
        description: artObject.label?.description || "No description available",
        presentingDate: artObject.dating?.presentingDate || "Unknown date",
        webImage: artObject.webImage || null,
      };
    }

    return {
      title: "Unknown Title",
      description: "No description available for this artwork.",
      presentingDate: "Unknown date",
    };
  } catch (error) {
    console.error("Error fetching art details:", error);
    throw error;
  }
};
