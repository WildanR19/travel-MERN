import React from 'react';
import Button from "../elements/Button";

const IconText = (props) => {
  return (
    <>
      <Button className={["brand-text-icon fw-bolder", props.className].join(" ")} href="" type="link">
        Stay<span className="text-secondary">cation.</span>
      </Button>
    </>
  );
};

export default IconText;