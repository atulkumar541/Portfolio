import React from "react";

const AboutList = ({ heading, value }) => {
  return (
    <div className="col-sm-6 py-1">
      <h5 className="d-inline text-primary">{heading}:</h5> {value}
    </div>
  );
};

export default AboutList;
