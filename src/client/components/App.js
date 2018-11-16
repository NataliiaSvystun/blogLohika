import React, { Component } from 'react';
import './app.css';
import ReactImage from './react.png';

export default class App extends Component {
  state = { username: null };

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }  
 
  render() {
	   const colors = [
  {
	  "name": "Green",
	  "description": "lalalal"
	  },
	 {
	  "name": "Red",
	  "description": "blablabla"
	  },
 {
	  "name": "Blue",
	  "description": "vavava"
 }
]
  
  const Display = ({name, description}) =>
		<h1>{name}</h1>
		<ul> {colors.map((color, i)=>
		<li>{color.name}</li>)}
		</ul>

    const { username } = this.state;
    return (
      <div>
        {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
        <img src={ReactImage} alt="react" />
		
      </div>
    );
  }
}
