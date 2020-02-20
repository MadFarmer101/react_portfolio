import React from "react";

const Hello = () => {
    return (
      <div className="ui main container" id="hello">
          <div class="ui stackable two column grid">
            <div className="column">
              <img src="./src/images/birds.jpg" id="birds"/>
            </div>
            <div className="column">
              <img src="./src/images/guy.png" id="guy"/>
            </div>
        </div>
      </div>
    );
};

export default Hello;
