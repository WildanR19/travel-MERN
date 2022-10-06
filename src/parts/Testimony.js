import React from 'react';
import Star from "../elements/Star";
import testimonyFrame from "assets/images/testimonial-frame.png"
import Button from "../elements/Button";

const Testimony = ({data}) => {
  return (
    <div className="container py-4">
      <div className="row align-items-center">
        <div className="col-4">
          <div className="testimonial-hero">
            <img src={data.imageUrl} alt="Testimonial" className="position-absolute" style={{zIndex: 1, margin: '39px 0 0 39px'}}/>
            <img src={testimonyFrame} alt="Testimonial" className="position-absolute" />
          </div>
        </div>
        <div className="col">
          <h4 style={{marginBottom: 40}}>{data.name}</h4>
          <Star value={data.rate} width={35} height={35} spacing={4} />
          <h2 className="fw-light lh-sm my-2">
            {data.content}
          </h2>
          <span className="fw-light text-gray-500">{data.familyName}, {data.familyOccupation}</span>
          <br/>
          <div style={{marginTop: 50}}>
            <Button className="btn px-5" hasShadow isPrimary type="link" href={`/testimonial/${data._id}`}>Read Their Story</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimony;