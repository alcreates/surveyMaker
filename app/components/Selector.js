var React = require('react');
var Router = require('react-router')

var image = "https://static.pexels.com/photos/29724/pexels-photo-29724.jpg"

var jumboStyle = {
	
	backgroundImage: 'url(' + image + ')',
	height : 600,
}
var buttonStyle = {
	width: 200,
	height:100,
	position: 'relative',
	top: 20,
}





var Selector = React.createClass({
	buttonClicked: function(event){
		console.log(event.target.value);
		var clientChoice = event.target.value;
		if(clientChoice == 'User'){
			alert('User')
			this.props.history.push("/Search");
		}
		if(clientChoice == 'Admin'){
			alert('Admin')
		}
	},

	render: function(){

			return(

				<div className = "main-container">
					<div className="jumbotron" style={jumboStyle}>
						<h2 className="text-center"><strong>(ReactJS) Store and Share Everything Important</strong></h2>
						<h3 className="text-center">Search for and save articles of interest.</h3>
						<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
							<div class="row">
								<button value='User' onClick={this.buttonClicked} type="button" className="btn btn-primary center-block" style={buttonStyle}>User</button>
							</div>
						</div>
						<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
							<div className="row">
								<button value='Admin' onClick={this.buttonClicked} type="button" className="btn btn-primary center-block" style={buttonStyle}>Admin</button>
							</div>
						</div>		

					</div>
				</div>
				)

	}


})


// Export the module back to the route
module.exports = Selector;