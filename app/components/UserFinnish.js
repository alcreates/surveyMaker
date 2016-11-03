var React = require('react');
var Router = require('react-router');
var Selector= require('./Selector');


var Link = require('react-router').Link
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




var UserFinnish = React.createClass({
	
	

	render: function(){
			
			return(


				<div className = "main-container">
					<div className="jumbotron" style={jumboStyle}>
						<h2 className="text-center"><strong>Congratulations</strong></h2>
						<h3 className="text-center">Survey Completed</h3>
						
						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
							<div className="row">
							<Link to="/"> 	<button value='home' type="button" className="btn btn-primary center-block" style={buttonStyle}>Home</button></Link>
							</div>
						</div>		

					</div>
				</div>
				)
		
	}


})


// Export the module back to the route
module.exports = UserFinnish;