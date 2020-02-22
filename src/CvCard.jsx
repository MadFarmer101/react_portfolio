import React from "react";

const CvCard = ({ info }) => {
  return (
    <>
      <div id="cards" class="ui card">
        <div class="ui slide masked reveal image">
          <img src={info.image} class="visible content" />
          <div class="hidden content">
            <h3 id="cvheader" class="ui header">{info.name}</h3>
            <span id="cvyear" class="date">{info.year}</span>
            <p id="cvdescription" class="description">{info.description}</p>
            <p id="cvdescription" class="description">{info.description2}</p>
            <p id="cvdescription" class="description">{info.description3}</p>
            <p id="cvdescription" class="description">{info.description4}</p>
            <p id="cvdescription" class="description">{info.description5}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CvCard;