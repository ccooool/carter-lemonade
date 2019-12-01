import React from 'react';

class Visual extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <img style={{width:200, height:200}} src={require("../assets/lemonade_logo.png")} alt="Lemonade Image"></img>
            </div>
        )
    }
}

export default Visual;



