import React from "react";
import { Image } from "react-bootstrap";
const BigPoster = ({bigposterimageurl}) => {
  return (
    <Image
      className="d-flex w-100 mt-3 " style={{borderRadius:"15px"}}
      src={bigposterimageurl}
    />
  );
};

export default BigPoster;
