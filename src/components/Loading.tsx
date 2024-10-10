// Functional component for displaying a loading state
const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-bar">
        <div className="paintbrush"></div>
      </div>
      <p className="loading-text">Bringing the art to you...</p>
    </div>
  );
};

export default Loading;
