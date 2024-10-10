import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Defining the types for props that the ArtDetail component will receive
interface ArtDetailProps {
  art: {
    title: string;
    description: string;
    presentingDate: string;
    webImage?: { url: string };
  };
}
// Functional component for rendering detailed artwork information
const ArtDetail: React.FC<ArtDetailProps> = ({ art }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  // Function to handle image click to enter full-screen mode
  const handleImageClick = () => {
    setIsFullScreen(true);
  };
  // Function to close full-screen mode
  const closeFullScreen = () => {
    setIsFullScreen(false);
  };

  // Check for the availability of artwork details
  if (!art || !art.title || !art.description) {
    return <p>Artwork details are unavailable.</p>;
  }

  return (
    <>
      <div className="art-detail-container">
        <div className="art-back">
          <Link href="/">
            <span className="back-button">← Back to Gallery</span>
          </Link>
        </div>

        <div className="art-content">
          {art.webImage && art.webImage.url ? (
            <Image
              src={art.webImage.url}
              alt={art.title}
              className="art-image"
              onClick={handleImageClick}
              width={500}
              height={500}
            />
          ) : (
            <div className="art-image-placeholder">Image not available</div>
          )}
        </div>

        <div className="art-info">
          <h2>{art.title}</h2>
          <p>
            <strong>Date:</strong> {art.presentingDate}
          </p>
          <p>{art.description}</p>
        </div>
      </div>

      {isFullScreen && (
        <div className="full-screen-overlay">
          <Image
            src={art.webImage?.url || ""}
            alt={art.title}
            className="full-screen-image"
            width={800}
            height={800}
          />
          <button className="close-button" onClick={closeFullScreen}>
            &times;
          </button>
        </div>
      )}
    </>
  );
};

export default ArtDetail;
