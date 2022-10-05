import React from 'react';
import propTypes from "prop-types";
import "elements/Star/index.scss"

const Star = ({value, height, width, spacing, className}) => {
  const decimals = Number(value) % 1
  const star = []
  let leftPosition = 0
  for (let i = 0; i < 5 && i < value - decimals; i++) {
    leftPosition = leftPosition + width
    star.push(
      <div className="star" key={`star-${i}`}
           style={{left: i * width, width: width, height: height, marginRight: spacing}}></div>
    )
  }
  if (decimals > 0 && value <= 5) {
    star.push(
      <div className="star" key={`starWithDecimal`}
           style={{left: leftPosition, width: decimals * width, height: height}}></div>
    )
  }

  const starPlaceHolder = []
  for (let i = 0; i < 5; i++) {
    starPlaceHolder.push(
      <div className="star placeholder" key={`star-placeholder-${i}`}
           style={{left: i * width, height: height, width: width, marginRight: spacing}}></div>
    )
  }

  return (
    <>
      <div className={['stars', className].join(" ")} style={{height: height}}>
        {star}
        {starPlaceHolder}
      </div>
    </>
  );
};

Star.propTypes = {
  className: propTypes.string,
  value: propTypes.number,
  width: propTypes.number,
  height: propTypes.number,
  spacing: propTypes.number,
}

export default Star;