import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fetchArtDetail } from "../../services/rijksmuseumApi";
import ArtDetail from "../../components/ArtDetail";
import Loading from "../../components/Loading";

// Defining the types for the artwork detail
interface ArtDetailType {
  title: string;
  description: string;
  presentingDate: string;
  webImage?: { url: string };
}
// Rendering the artwork detail page
const ArtDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [artDetail, setArtDetail] = useState<ArtDetailType | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      setLoading(true);
      fetchArtDetail(id as string)
        .then((data) => {
          setArtDetail(data);
          setLoading(false);
        })
        .catch(() => {
          setError("Failed to load artwork details.");
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <h1>Rijksmuseum Shuffle</h1>
      <div className="art-detail-container">
        <ArtDetail
          art={
            artDetail || {
              title: "Unknown",
              description: "No description available",
              presentingDate: "Unknown",
              webImage: { url: "" },
            }
          }
        />
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}{" "}
    </div>
  );
};

export default ArtDetailPage;
