import { Component } from "react";
import User from "./UserClass";
import { Title, Input, _Input } from "./StyledComponent";


class About extends Component {
    constructor(props) {
        super(props);
        console.log('Parent Constructor called');
    }

    componentDidMount() {   
        console.log('Parent Component Did Mount called');
        // console.log(this.input.focus());
    }

    changeInput = (e) => {
    console.log(e.target.value);
  }

    render() {
        
        console.log('Parent Render called');

        return (<div>
            {/* <h1>About</h1> */}
            <Title>About</Title>
           
            <_Input type='text' innerref={(comp) => { this.input = comp; }} placeholder="name .." onChange={this.changeInput}/>
            <User name={"Neelesh ( First Class Component)"}></User>
            <User name={"Neelesh ( Second Class Component)"}></User>
            {/* <Test></Test> */}
        </div>)
    }
}

export default About;
