import "./Gallery.style.css";

const Gallery = () => {
  return (
    <div className="snapshot-gallery">
      <h3>Snapshots:</h3>
      <div className="gallery-container">
        <div class="gallery" id="gallery"></div>
        <a href="#" class="btn btn-left" id="prev"></a>
        <a href="#" class="btn btn-right" id="next"></a>
      </div>
    </div>
  );
};

export default Gallery;
