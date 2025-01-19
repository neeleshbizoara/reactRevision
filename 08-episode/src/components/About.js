import { Component } from "react";
import User from "./UserClass";

class About extends Component {
    constructor(props) {
        super(props);
        console.log('Parent Constructor called');
    }

    componentDidMount() {   
        console.log('Parent Component Did Mount called');
    }

    render() {
        
        console.log('Parent Render called');

        return (<div>
            <h1>About</h1>
            <User name={"Neelesh (Class Component)"}></User>
        </div>)
    }
}

export default About;


// export default function About() {
//     return (<div>
//         <h1>About</h1>
//         <User name={"Neelesh (Class Component)"}></User>
//     </div>)
// }