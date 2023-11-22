import React from "react";

const CompFeatureItem = (props) => {
  const { srcImg, altImg, titleFeat, descFeat } = props;

  return (
    <div className="feature-item">
      <img src={srcImg} alt={altImg} className="feature-icon" />
      <h3 className="feature-item-title">{titleFeat}</h3>
      <p>{descFeat}</p>
    </div>
  );
};

export default CompFeatureItem;
