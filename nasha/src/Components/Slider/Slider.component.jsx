import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    const [ur1, ur2, ur3, ur4, ur5] = [...this.props.snapShots];
    const photos = [
      {
        name: "Photo 1",
        url: `https://hassan1245.pythonanywhere.com/${ur1}`,
      },
      {
        name: "Photo 2",
        url: `https://hassan1245.pythonanywhere.com/${ur2}`,
      },
      {
        name: "Photo 3",
        url: `https://hassan1245.pythonanywhere.com/${ur3}`,
      },
      {
        name: "Photo 4",
        url: `https://hassan1245.pythonanywhere.com/${ur4}`,
      },
      {
        name: "Photo 5",
        url: `https://hassan1245.pythonanywhere.com/${ur5}`,
      },
    ];
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="slider">
        <h2> SnapShots : </h2>
        <Slider {...settings}>
          {photos.map((photo) => {
            return (
              <div>
                <img src={photo.url} alt="program snapshot" />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
