# Rijksmuseum Shuffle

This project is a web application that interacts with the Rijksmuseum API to fetch and display art pieces in a gallery format. The application is built using Next.js and TypeScript, providing a seamless and responsive user experience.

## Frontend

### Features

- **Art Gallery Display**: Showcases 3 pieces of art fetched from the Rijksmuseum API with a shuffle button to change the displayed artworks.
- **Art Details Page**: Clicking on an artwork opens a detailed view with comprehensive information, including title, description, and a full-screen image.
- **Responsive Design**: The application is designed to be mobile-friendly and adapts to different screen sizes.
- **Loading Indicator**: Displays an art-themed loading bar while fetching data from the API.

### Technologies

- Next.js
- TypeScript
- CSS
- React

### Instructions

1.  **Clone the repository**:

    git clone https://github.com/yourusername/weather-dashboard.git

2.  **Navigate to the frontend directory:**

    cd art-gallery

3.  **Install dependencies:**

    npm install

4.  **Set up your API key:**
    Create a .env.local file in the root of your project and add your Rijksmuseum API key and define port on which aplication will be ran:

        RIJKSMUSEUM_API_KEY=your_api_key_here
        PORT=3000

5.  **Run the server:**

    npm run build
    npm run start

## Running the Application

1. **Open your browser and navigate to http://localhost:3000**

2. **Explore the gallery**
   by clicking on the artworks to view their details and using the shuffle button to change the displayed artworks.

## Notes

- Ensure your API key from the Rijksmuseum is correctly set in your .env.local file.
- The application design is minimalistic and user-friendly.
- The loading animation enhances the user experience by providing feedback during data fetching.

## Potential Improvements

- Implement user authentication for personalized art collections.
- Add search functionality to allow users to find specific artworks easily.
- Introduce filtering options based on art categories or artists.
