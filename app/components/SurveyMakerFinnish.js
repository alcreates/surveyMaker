var React = require('react');
var Router = require('react-router');
var Selector= require('./Selector');
var SurveyMakerName= require('./SurveyMakerName');
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




var SurveyMakerFinnish = React.createClass({
	
	

	render: function(){
			
			return(


				<div className = "main-container">
					<div className="jumbotron" style={jumboStyle}>
						<h2 className="text-center"><strong>Congratulations</strong></h2>
						<h3 className="text-center">Survey Completed</h3>
						<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
							<div class="row">
								<Link to="/SurveyMaker"> 	<button value='home' type="button" className="btn btn-primary center-block" style={buttonStyle}>Create Another Survey</button></Link>

							</div>
						</div>
						<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
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
module.exports = SurveyMakerFinnish;