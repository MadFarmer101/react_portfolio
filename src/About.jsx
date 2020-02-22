import React, { Component } from "react";


class Cv extends Component {
    state = {
        cvcards: []
    };

render() {
    const cvcards = this.state.cvcards;
    let cvCardsList;

    if (cvcards.length > 0) {
        cvCardsList = cvcards.map(info => {
            return (
                <div id={'info-' + info.id} key={info.id}>
                    <h3 className="ui header">{info.name}</h3>
                </div> 
            )
        });   
    }

    return (
        <div className="ui main container">
            <h1 id="cvcards-header" className="ui header">CV</h1>
            {cvCardsList}
        </div>
    );
}
}


export default Cv;