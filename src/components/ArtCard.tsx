import Link from "next/link";
import Image from "next/image";

// Defining the types for props that the ArtCard component will receive
interface ArtCardProps {
  art: {
    title: string;
    principalOrFirstMaker: string;
    webImage: { url: string };
    id: string;
  };
}

// Functional component for rendering an individual art card
const ArtCard: React.FC<ArtCardProps> = ({ art }) => {
  return (
    <div className="art-card">
      <Image
        src={art.webImage?.url}
        alt={art.title}
        className="art-image"
        width={250}
        height={250}
      />
      <Link href={`/art/${art.id}`}>
        <span className="art-title">{art.title}</span>{" "}
      </Link>
      <p className="art-artist">{art.principalOrFirstMaker}</p>
    </div>
  );
};

export default ArtCard;
