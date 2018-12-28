import React, { Component } from 'react';
import { connect } from 'react-redux';
import { simpleAction } from '../actions/SimpleAction'
import '../app.css';

class App extends Component {
  state = { username: null };

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
	fetch('/api/getColors')
      .then(res => res.json())
      .then(colorsFromServer => this.setState({ colorsFromServer: colorsFromServer.colors }));
  };  
	
	simpleAction = (event) => {
		this.props.simpleAction();
	 }

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
		<button onClick={this.simpleAction}>Test redux action</button>
		<pre>
 {
  JSON.stringify(this.props)
 }
</pre>
	   </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
	simpleAction: () => dispatch(simpleAction())
 })


export default connect(state => ({ username: state.username}), mapDispatchToProps)(App);
