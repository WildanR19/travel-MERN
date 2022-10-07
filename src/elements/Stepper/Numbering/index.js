import React from 'react';
import propTypes from "prop-types";
import "./index.scss"

const Numbering = (props) => {
  const { style, className, data, current } = props
  const KeysOfData = Object.keys(data);

  return (
    <>
      <ol className={["stepper", className].join(" ")} style={style}>
        {KeysOfData.map((list, index) => {
          let isActive = list === current ? "active" : "";
          if (index + 1 === KeysOfData.length) {
            isActive = "";
            return null;
          }

          return (
            <li key={`list-${index}`} className={[isActive].join(" ")}>
              {index + 1}
            </li>
          );
        })}
      </ol>
    </>
  );
};

export default Numbering;

Numbering.propTypes = {
  className: propTypes.string,
  data: propTypes.object,
  current: propTypes.string,
};