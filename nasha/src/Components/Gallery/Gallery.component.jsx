import { useState } from "react";
import leftArrow from "../../assets/img/angel-left.svg";
import rightArrow from "../../assets/img/angel-right.svg";
import noImg from "../../assets/img/no-image-icon.png";
import "./Gallery.style.css";

const Gallery = (props) => {
  const [bgImg, setbgImg] = useState("");

  const pictuers = [...props.snapShots];
  let counter = 0;

  const goPrev = function () {
    counter--;
    if (counter < 0) counter = pictuers.length - 1;
    setbgImg(pictuers[counter]);
  };

  const goNext = function () {
    counter++;
    if (counter > pictuers.length - 1) counter = 0;
    setbgImg(pictuers[counter]);
  };

  return (
    <div className="snapshot-gallery">
      <h3>Snapshots:</h3>
      <div className="gallery-container">
        <div
          className="gallery"
          id="gallery"
          style={{
            backgroundImage: `url(${
              bgImg ? `https://hassan1245.pythonanywhere.com/${bgImg}` : noImg
            })`,
          }}
        ></div>
        <a href="#/" className="btn btn-left" id="prev" onClick={goPrev}>
          <img src={leftArrow} alt="left-arrow" />
        </a>
        <a href="#/" className="btn btn-right" id="next" onClick={goNext}>
          <img src={rightArrow} alt="right-arrow" />
        </a>
      </div>
    </div>
  );
};

export default Gallery;
