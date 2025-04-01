const Shimmer = () => {
  return (
    <div className="body">
      <div className="shimmer-search-box"></div>
      <div className="restaurant-container">
        {Array(8)
          .fill(null)
          .map((_, index) => (
            <div className="shimmer-card" key={index}></div>
          ))}
      </div>
    </div>
  );
};

export default Shimmer;
