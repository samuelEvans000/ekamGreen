import "./Home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect, useRef } from "react";
import { carouselData } from "./Carousal";

const Products = () => {
  const [slidesToShow, setSlidesToShow] = useState(2);
  const [slidesToScroll, setSlidesToScroll] = useState(1);
  const sliderRef = useRef(null);
  const [autoplay, setAutoplay] = useState(false);

  useEffect(() => {
    const updateSlidesToShow = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 1220) {
        setSlidesToShow(4);
        setAutoplay(false);
      } else if (screenWidth >= 830) {
        setSlidesToShow(3);
        setAutoplay(true);
      } else if (screenWidth >= 770) {
        setSlidesToShow(2);
        setAutoplay(true);
      } else if (screenWidth >= 575) {
        setSlidesToShow(2);
        setAutoplay(true);
      } else if (screenWidth >= 400) {
        setSlidesToShow(1);
        setAutoplay(true);
      } else {
        setSlidesToShow(1);
        setSlidesToScroll(1);
        setAutoplay(true);
      }
    };
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);

    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    arrows: false,
    autoplay: autoplay,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <div className="products">
      <div className="Title">
        <h2>Our Products</h2>
        <div className="productLine"></div>
      </div>
      <div className="Plist">
        <div className="Pcontent">
          <img src="/assets/p1.png" />
          <h4>On Grid System</h4>
          <p>
            If you”re looking for a way to save money on your power bill,
            increase the value of your home or office
          </p>
        </div>
        <div className="Pcontent">
          <img src="/assets/p2.png" />
          <h4>Utility Scale Power Plant</h4>
          <p>
            To successfully deliver a solar power plant project can be
            extraordinarily complicated.
          </p>
        </div>
        <div className="Pcontent">
          <img src="/assets/p3.png" />
          <h4>Off Grid System</h4>
          <p>
            Off-grid solar energy systems convert sunlight into electricity
            without connecting to local utility grids.
          </p>
        </div>
        <div className="Pcontent">
          <img src="/assets/p4.png" />
          <h4>Solar Water Heating</h4>
          <p>
            Ekam Green Solar Water Heaters are amongst the most affordable and
            simple to install of all solar hot water systems.
          </p>
        </div>
      </div>
      <div className="PlistM">
        <Slider ref={sliderRef} {...settings} className="slider">
          {carouselData.map((box, index) => (
            <div className="box">
              <div key={index} className="Pcontent">
                <img src={box.img} />
                <h4>{box.header}</h4>
                <p>{box.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Products;
