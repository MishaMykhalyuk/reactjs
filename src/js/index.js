const React = require('react');
const ReactDOM = require('react-dom');

const ValidateInput = React.createClass({
	getInitialState() {
		return { valid: false };
	},

	validate(event) {
		this.setState({ valid: event.target.value.includes('react') });
	},

	render() {
		return (
			<div>
				<h2>Validate to 'react' value</h2>
				<input onChange={this.validate} 
					style={
						{
							background: this.state.valid ? 'green' : 'red',
						 	height: 30,
						 	width: 230,
						 	fontSize: 24
						 }
					} />
			</div>
		);
	}
});

ReactDOM.render(<ValidateInput />, document.getElementById('app'));