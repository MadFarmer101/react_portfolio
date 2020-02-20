import React from "react"
import { UndrawOnTheOffice } from "react-undraw-illustrations";

const About = () => {
    let audio = new Audio("./src/music/enjoy.mp3")

    const start = () => {
      audio.play()
    }
  
    const pause = () => {
      audio.pause()
    }
    return (
        <div classname="ui main container">
            <div class="ui stackable three column grid">
                <button class="ui labeled icon button" onClick={start}>
                    <i class="play icon"></i>
                        Play
                </button>
                <button class="ui right labeled icon button" onClick={pause}>
                    <i class="pause icon"></i>
                        Pause
                </button>
                <div class="column" id="ill-about">
                    <UndrawOnTheOffice primaryColor='#12283a' height='500px'/>
                </div>
                <div class="column">
                    <h1 id="about-header" className="ui header">About Me</h1>
                    <p>
                        Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?
                    </p>
                    
                </div>
            </div>
        </div>  
    );
};

export default About;