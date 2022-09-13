import React, { Component } from "react";
import Slider from "react-slick";
import Adidas from '../images/image1.png'
import Converse from '../images/image2.jpg'
import Asics from '../images/image3.png'
import Fila from '../images/image4.jpg'
import Lacoste from '../images/image5.jpg'
import Newbalance from '../images/image6.jpg'
import Nike from '../images/image7.png'
import Vans from '../images/image8.png'
import Puma from '../images/image9.png'

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <div className="slide">
        <h2>Découvrez nos marques</h2>
        <Slider {...settings}>
          <div >
            <img src={Adidas} alt="" className="adidas" />
          </div>
          <div>
          <img src={Converse} alt="" className="adidas" />
          </div>
          <div>
          <img src={Asics} alt="" className="adidas" />
          </div>
          <div>
          <img src={Fila} alt="" className="adidas" />
          </div>
          <div>
          <img src={Lacoste} alt="" className="lacoste" />
          </div>
          <div>
          <img src={Newbalance} alt="" className="adidas" />
          </div>
          <div>
          <img src={Nike} alt="" className="adidas" />
          </div>
          <div>
          <img src={Vans} alt="" className="vans" />
          </div>
          <div>
          <img src={Puma} alt="" className="adidas" />
          </div>
        </Slider>
      </div>
    );
  }
}