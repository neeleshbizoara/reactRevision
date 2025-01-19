import React from 'react';

class User extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            userInfo: {
                name: "",
                html_url: "",
            }
        }

        console.log("Child Constructor");
    }

    async componentDidMount() {
        console.log("Child Component Did Mount")
        const data = await fetch("https://api.github.com/users/neeleshbizoara");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo: {
                name: json.name,
                html_url: json.html_url,
                avatar_url: json.avatar_url
            }
        })
    }

    componentDidUpdate() {
        console.log('Component Did Update')
    }

    componentWillUnmount() {
        console.log('Component Will Unmount');
    }

    render() {
        console.log("Child Render");
        const { count } = this.state;
        return (<div>
            <h3>{count}</h3>
            <button onClick={() => {
                this.setState({
                    count: this.state.count + 1,
                })
            }}>Count Increase</button>
            <div className='menuContainer'>
                <div style={{ width: '50%'}}>
            <h3>User: {this.state.userInfo.name}</h3>
                    <a href={this.state.userInfo.html_url}>{this.state.userInfo.html_url}</a>
                </div>
                <div>
                    <img className='menuImage' alt='icon' src={this.state.userInfo.avatar_url}/>
                </div>
                </div>
        </div>)
    }
}

export default User;