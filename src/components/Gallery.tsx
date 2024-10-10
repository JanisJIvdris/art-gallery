import { useEffect, useState } from "react";
import { fetchArtworks } from "../services/rijksmuseumApi";
import ArtCard from "./ArtCard";
import Link from "next/link";
import Loading from "./Loading";
import { Artwork } from "../types";

// Functional component for rendering the gallery of artworks
const Gallery = () => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState(true);

  // Function to load artworks from the API
  const loadArtworks = async () => {
    setLoading(true);
    try {
      const fetchedArtworks = await fetchArtworks();
      setArtworks(fetchedArtworks);
    } catch {
      console.error("Failed to fetch artworks:");
    }
    setLoading(false);
  };

  useEffect(() => {
    loadArtworks();
  }, []);

  // Function to shuffle artworks by re-fetching
  const shuffleArt = () => {
    loadArtworks();
  };

  // Display loading component while artworks are being fetched
  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <h1>Rijksmuseum Shuffle</h1>
      <div className="art-gallery">
        {artworks.map((art) => (
          <Link key={art.id} href={`/art/${art.id}`}>
            <div style={{ cursor: "pointer" }}>
              <ArtCard art={art} />
            </div>
          </Link>
        ))}
      </div>
      <button onClick={shuffleArt}>Shuffle</button>
    </div>
  );
};

export default Gallery;
