import React from "react"
import { UndrawOnTheOffice } from "react-undraw-illustrations";

const About = () => {
    return (
        <div classname="ui main container">
            <div class="ui stackable two column grid">
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