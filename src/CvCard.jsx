import React from "react";

const CvCard = ({ info }) => {
  return (
    <>
      <div class="ui card">
        <div class="image">
          <img src={info.image} />
        </div>
        <div class="content">
          <h3 class="ui header">{info.name}</h3>

          <div class="description">{info.description}</div>
        </div>
      </div>
    </>
  );
};

export default CvCard;