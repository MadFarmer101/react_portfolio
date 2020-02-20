import React from "react";

const Hello = () => {
  let audio = new Audio("./src/music/streetlife.mp3")

  const start = () => {
    audio.play()
  }

  const pause = () => {
    audio.pause()
  }
    return (
      <div className="ui main container" id="hello">
          <div class="ui stackable eight column grid">
            <div className="column">
              <img src="./src/images/birds.jpg" id="birds"/>
            </div>
            <div className="column">
              <img src="./src/images/crack.png" id="crack"/>
            </div>
            <div className="column">
              <img src="./src/images/grafit.png" id="grafit"/>
            </div>
            <div className="column">
              <img src="./src/images/crack.png" id="crack2"/>
            </div>
            <div className="column">
              <img src="./src/images/guy.png" id="guy"/>
            </div>
            <button class="ui icon button"  onClick={start}>
          <i class="music icon"></i>
        </button>
        <button class="ui icon button" onClick={pause}>
          <i class="pause circle icon"></i>
        </button>
        </div>
      </div>
    );
};

export default Hello;
