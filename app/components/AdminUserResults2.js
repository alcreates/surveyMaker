var React = require('react');
var Router = require('react-router');
var helpers = require('../utils/helpers.js');
var UserSurvey = require('./UserSurvey');
var AdminUserSurvey = require('./AdminUserSurvey');
//Second component is User workflow
//Component takes the user name from the props and sets it to the state

var AdminUserResults2 = React.createClass({
	getInitialState: function(){
		return {
			userName: this.props.userName,
			savedSurveys: "",
			clientChoice: ""
		}
	},
//Once the component mounts, it will make a call to our data base to get available surveys
// And set its results to savedSurveys state making them available to the component. 
	componentDidMount(){
        console.log("did mount user name = " + this.state.userName);
		helpers.getSelectedUserSurveys(this.state.userName)
			.then(function(Data){
				this.setState({
					savedSurveys: Data.data
				});
				console.log("user survey results " + Data.data);
			}.bind(this))
	},
// A button is attached to each survey in order to let the user be able to pick a survey
// And this function adds the chosen survey's value to the clientChoice state.  	
	handleButton:function(event){
		
		console.log(event.target.value)
		console.log(this.state.savedSurveys);
		this.setState({clientChoice: event.target.value});
		

	},

	// /*This code handles the sending of the search terms to the parent Search component*/
	
	render: function(){
		// if there are no surveys the following will be rendered.
		if (this.state.savedSurveys == "") {
			return(

				<li className="list-group-item">

					<h3>
					  	<span><em>No  available ...</em></span>
					</h3>

			  	</li>

			)
		} // if the client has made a choice, they will be forwarded to UserSurvey component where they will be able to fill out the survey they chose. 
		else if(this.state.clientChoice){
			var surveys = this.state.savedSurveys
			var choice = this.state.clientChoice
			var result = surveys[choice];
			var answers = result.answers;
			var userName = result.userName;
			var type = result.surveyType;
			var answersArr = []	

				Object.keys(answers).forEach(function(key) {
					answersArr.push(answers[key])
				});

			 console.log(answersArr);
			 console.log("this is UserSurvey type " + result.answers[0]);
			// surveyPick - questionaires are an array of objects - choice is the index of the objects.
			// name - was obtained from the userName component. 
			return(
				<AdminUserSurvey name={userName} type ={type} answers ={answersArr} />

				)

		}

		else {
			// This function will iterate through savedSurveys and conduct the following to each
			// and will be added to unorder list in the following return statement.
			var surveys = this.state.savedSurveys.map(function(survey, index){
				
				return(

						<div key={index}>

						  <li className="list-group-item" >

							<h3>
							  	<span><em>{survey.surveyType}</em></span>
								<span className="btn-group pull-right" >
									<button value={index} onClick={this.handleButton} className="btn btn-default ">{this.state.userName + "surveys"}</button>
									
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
								<h1 className="panel-title"><strong><i className="fa fa-download" aria-hidden="true"></i> {this.state.userName + " surveys"}</strong></h1>
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
module.exports = AdminUserResults2;