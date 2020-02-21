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
                    Hi! My name is Janko Radakovic. I come from Croatia and have been living in Sweden for a past two years. 
                    </p>
                    <p>
                    I studied Economics, but since my student years I’ve been working in the Casino Industry. Working in the Casino made me able to travel the world working on a Cruise ship in my younger years, but I’ve felt I’m ready to take on the new chapter in my life and became a Full Stack Developer.
                    </p>
                    <p>
                    I enrolled in a developer program at Craft Academy where we’re acquiring skills in Ruby and JavaScript programming languages, as well as Ruby on Rails framework and React library.
                    </p>
                    <p>
                    I really enjoy coding and don’t really consider it work, but more like doing some fulfillment like art.
                    </p>
                    <p>
                    Anyway, hope you’ll enjoy viewing my projects as much as I enjoyed doing them. For any more info, please turn to the Contact page.
                    </p>
                    
                </div>
            </div>
        </div>  
    );
};

export default About;