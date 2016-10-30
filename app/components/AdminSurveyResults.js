var React = require('react');
var Router = require('react-router');
var helpers = require('../utils/helpers.js');
var UserSurvey = require('./UserSurvey');

//Second component is User workflow
//Component takes the user name from the props and sets it to the state

var AdminSurveyResults = React.createClass({
	getInitialState: function(){
		return {
			surveyName: this.props.surveyName,
			savedUsers: [],
			clientChoice: ""
		}
	},
//Once the component mounts, it will make a call to our data base to get available surveys
// And set its results to savedSurveys state making them available to the component. 
	componentDidMount(){

		helpers.getUsersBySurvey(this.state.surveyName)
			.then(function(Data){
				var users = [];

				for (var i = 0; i < Data.data.length; i++) {
						users.push(Data.data[i].userName)
					}	

				this.setState({
					savedUsers: users
				});
				console.log("saved user results " + this.state.savedUsers);
			}.bind(this))
	},
// A button is attached to each survey in order to let the user be able to pick a survey
// And this function adds the chosen survey's value to the clientChoice state.  	
	handleButton:function(event){
		
		console.log(event.target.value)
		this.setState({clientChoice: event.target.value});
		

	},

	// /*This code handles the sending of the search terms to the parent Search component*/
	
	render: function(){
		// if there are no surveys the following will be rendered.
		if (this.state.savedSurveys == "") {
			return(

				<li className="list-group-item">

					<h3>
					  	<span><em>No Surveys available ...</em></span>
					</h3>

			  	</li>

			)
		} // if the client has made a choice, they will be forwarded to UserSurvey component where they will be able to fill out the survey they chose. 
		else if(this.state.clientChoice){
			var questionaires = this.state.savedSurveys
			var choice = this.state.clientChoice
			// surveyPick - questionaires are an array of objects - choice is the index of the objects.
			// name - was obtained from the userName component. 
			return(
				<UserSurvey surveyPick={questionaires[choice]} name={this.state.userName}/>

				)

		}

		else {
			//This function will iterate through savedSurveys and conduct the following to each
			//and will be added to unorder list in the following return statement.
			var surveys = this.state.savedUsers.map(function(user, index){

				return(

						<div key={index}>

						  <li className="list-group-item" >

							<h3>
							  	<span><em>{user}</em></span>
								<span className="btn-group pull-right" >
									<button value={index} onClick={this.handleButton} className="btn btn-default ">Complete Survey</button>
									
								</span>
							</h3>
							

						  </li>

						</div>
				)

			}.bind(this))

		}

		// Returns the list of surveys.
		return(
			<div className="main-container">
				<div className="row">
					<div className="col-lg-12">

						<div className="panel panel-primary">
							<div className="panel-heading">
								<h1 className="panel-title"><strong><i className="fa fa-download" aria-hidden="true"></i> Survey Users</strong></h1>
							</div>
							<div className="panel-body">
								<ul className="list-group">
								 	{surveys}
								</ul>
							</div>
						</div>

					</div>
				</div>


			</div>

		)
	}
		


});


// Export the module back to the route
module.exports = AdminSurveyResults;