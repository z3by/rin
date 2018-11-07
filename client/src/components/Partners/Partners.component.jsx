import React from "react";
import "./Partners.css";
import { Slide } from "react-slideshow-image";

const slideImages = [];
for (let i = 1; i < 19; i++) {
  let imgUrl = `/imgs/partners/i${i}.png`;
  slideImages.push(imgUrl);
}

const properties = {
  duration: 3000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: false
};

const Partners = () => {
  const slides = slideImages.map((url, key) => {
    return (
      <div className="each-slide" key={key}>
        <div
          style={{
            backgroundImage: `url(${url})`
          }}
        />
      </div>
    );
  });
  return <Slide {...properties}>{slides}</Slide>;
};

export default Partners;
