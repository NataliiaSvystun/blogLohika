import React, { Component } from 'react';
import '../app.css';

export default class App extends Component {
  state = { username: null };

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
	fetch('/api/getColors')
      .then(res => res.json())
      .then(colorsFromServer => this.setState({ colorsFromServer: colors }));
  };  
  
  render() {
	   const { colorsFromServer } = this.state;
	   console.log(colorsFromServer); 
	   const colorsFromApp = [
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
];
	 
console.log(colorsFromApp); 
    const { username } = this.state;
    return (
      <div>
       	<ul> {colorsFromApp.map((colors, i)=>
			<li>{colors.name}, {colors.description}</li>
			)}			
		</ul>
		   
	   </div>
    );
  }
}
