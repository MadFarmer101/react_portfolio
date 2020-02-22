import React from "react";

const CvCard = ({ info }) => {
  return (
    <>
      <div class="ui card">
        <div class="ui slide masked reveal image">
          <img src={info.image} class="visible content" />
          <div class="hidden content">
            <h3 class="ui header">{info.name}</h3>
            <p class="description">{info.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CvCard;