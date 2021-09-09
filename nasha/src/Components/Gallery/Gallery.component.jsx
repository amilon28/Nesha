import "./Gallery.style.css";

const Gallery = () => {
  return (
    <div className="snapshot-gallery">
      <h3>Snapshots:</h3>
      <div className="gallery-container">
        <div className="gallery" id="gallery"></div>
        <a href="#/" className="btn btn-left" id="prev">
          prev
        </a>
        <a href="#/" className="btn btn-right" id="next">
          next
        </a>
      </div>
    </div>
  );
};

export default Gallery;
