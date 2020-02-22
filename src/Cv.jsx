import React, { Component } from "react";
import axios from "axios";
import CvCard from "./CvCard";


class Cv extends Component {
    state = {
        cvcards: []
    };

componentDidMount() {
    axios.get('./src/data/cvcards.json')
        .then(response => {
            this.setState({
              cvcards: response.data
            })
        })
}

render() {
    const cvcards = this.state.cvcards;
    let cvCardsList;

    if (cvcards.length > 0) {
        cvCardsList = cvcards.map(info => {
            return (
                <div id={'info-' + info.id} key={info.id}>
                    <CvCard info={info} />
                </div> 
            );
        });   
    }

    return (
        <div className="ui main container">
            <h1 id="cvcard-header" className="ui header">Curriculum Vitae</h1>
            <div className="column">
              <img src="./src/images/astro.png" id="astro"/>
            </div>
            <div className="ui stackable four column grid">{cvCardsList}</div>
        </div>
    );
}
}


export default Cv;