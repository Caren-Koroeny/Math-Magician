import { Component } from "react";

class UiScreen extends Component{
    constructor(){
        super();
        this.state = {};
    }

    render(){
        return(
            <div className="displayscreen-count-section">
            <input type="text" className="display" />
            </div>
        );
    }
}
export default UiScreen;