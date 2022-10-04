import React from 'react';

import imageHero from 'assets/images/picture.png'
import frameHero from 'assets/images/frame.png'
import ic_traveler from 'assets/images/icons/ic_traveler.svg'
import ic_cities from 'assets/images/icons/ic_cities.svg'
import ic_treasure from 'assets/images/icons/ic_treasure.svg'
import Button from "../elements/Button";
import {numberFormat} from "../helpers/Helpers";

const Hero = (props) =>
{
  const showMostPicked = () => {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop = 30,
      behavior: 'smooth'
    })
  }

  return (
    <section className="container pt-4">
      <div className="row align-items-center justify-content-md-center">
        <div className="col-auto me-5" style={{width: 530}}>
          <h1 className="fw-bold lh-base mb-3">
            Forget Busy Work, <br/>
            Start Next Vacation
          </h1>
          <p className="mb-4 fw-light text-gray-500 w-75" style={{lineHeight: '170%'}}>
            We provide what you need to enjoy your
            holiday with family. Time to make another
            memorable moments.
          </p>
          <Button className="btn px-5" hasShadow isPrimary onClick={showMostPicked}>
            Show me now
          </Button>

          <div className="row" style={{marginTop: 80}}>
            <div className="col-auto" style={{marginRight: 50}}>
              <img src={ic_traveler} alt={`${props.data.travelers} Travelers`}/>
              <h6 className="mt-3">
                {numberFormat(props.data.travelers)} <span className="text-gray-500 fw-light">Travelers</span>
              </h6>
            </div>
            <div className="col-auto" style={{marginRight: 50}}>
              <img src={ic_treasure} alt={`${props.data.treasures} Treasures`}/>
              <h6 className="mt-3">
                {numberFormat(props.data.treasures)} <span className="text-gray-500 fw-light">Treasures</span>
              </h6>
            </div>
            <div className="col-auto">
              <img src={ic_cities} alt={`${props.data.cities} Cities`}/>
              <h6 className="mt-3">
                {numberFormat(props.data.cities)} <span className="text-gray-500 fw-light">Cities</span>
              </h6>
            </div>
          </div>
        </div>

        <div className="col-6 ps-5">
          <div className="imageHero">
            <img src={imageHero} alt="Room with couches" className="img-fluid position-absolute imageHero" style={{zIndex: 1}}/>
            <img src={frameHero} alt="Room with couches" className="img-fluid position-absolute imageHero" style={{margin: '30px 0 0 30px'}}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;