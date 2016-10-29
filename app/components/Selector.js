var React = require('react');
var Router = require('react-router');
var User = require('./User');
var SurveyMakerName = require('./SurveyMakerName');
var currentTime = new Date();

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
	getInitialState: function(){
		return {
			clientChoice: "",
			submitted: false,
			question:"",
		}
	},

	buttonClicked: function(event){
		console.log(event.target.value);
		var clientChoice = event.target.value;
		if(clientChoice == 'User'){
			console.log(currentTime);
			this.props.history.push('/UserName');
		}
		if(clientChoice == 'Admin'){
			this.props.history.push('/Admin');
			//this.setState({clientChoice:'Admin'})
		}
	},
	componentWillUnmount:function(){
			this.setState({clientChoice:""});
	},

	render: function(){
			// if(this.state.clientChoice == 'User'){
				
			// 	return(
			// 		<User/>
			// 		)
			// }else if (this.state.clientChoice == 'Admin'){
				
			// 	return(
			// 		<SurveyMakerName/>
			// 		)
			// }

			return(

				<div className = "main-container">
					<div className="jumbotron" style={jumboStyle}>
						<h2 className="text-center"><strong>(ReactJS) Store and Share Everything Important</strong></h2>
						<h3 className="text-center"></h3>
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