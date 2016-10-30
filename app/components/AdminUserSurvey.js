var React = require('react');
var Router = require('react-router');
var helpers = require('../utils/helpers.js');
var UserSurvey = require('./UserSurvey');


//Second component is User workflow
//Component takes the user name from the props and sets it to the state

var AdminUserSurvey = React.createClass({
	getInitialState: function(){
		return {
			userName: this.props.name,
			answers : this.props.answers,
			surveyType: this.props.type,
			selectedSurveyQuestions: "",
			clientChoice: ""
		}
	},
//Once the component mounts, it will make a call to our data base to get available surveys
// And set its results to savedSurveys state making them available to the component. 
	componentDidMount(){
        console.log("did mount survey Type = " + this.state.surveyType);
		helpers.getSelectedSurvey(this.state.surveyType)
			.then(function(Data){
				
				

				this.setState({
					 selectedSurveyQuestions: Data.data[0].questions
				});
				
				
			}.bind(this));
	},
// A button is attached to each survey in order to let the user be able to pick a survey
// And this function adds the chosen survey's value to the clientChoice state.  	
	handleButton:function(event){
		
		// console.log(event.target.value)
		// console.log(this.state.savedSurveys);
		// this.setState({clientChoice: event.target.value});
		
			console.log(questions)
	},

	// /*This code handles the sending of the search terms to the parent Search component*/
	
	render: function(){
		if (this.state.answers == "") {
			return(

				<li className="list-group-item">

					<h3>
					  	<span><em>No  available ...</em></span>
					</h3>

			  	</li>

			)
		} // if the client has made a choice, they will be forwarded to UserSurvey component where they will be able to fill out the survey they chose. 
		else if(this.state.clientChoice){
			var names = this.state.savedSurveys
			var choice = this.state.clientChoice
			console.log('name picked =' + names[choice]);
			// surveyPick - questionaires are an array of objects - choice is the index of the objects.
			// name - was obtained from the userName component. 
			return(
				<AdminUserSurveyList userPick={names[choice]} />

				)

		}else{

		var questions = this.state.selectedSurveyQuestions
		
		var maker = this.state.answers.map(function(answer, index){
			return(

						<div key={index}>

						  <li className="list-group-item" >

							<h3>
								<span><em> {questions[index]} </em></span>
							  	
								
							</h3>
							<h4><span><em> {answer}</em></span></h4>
							

						  </li>

						</div>
				)

			}.bind(this));

		}
		
		return(
			<div className="main-container">
				<div className="row">
					<div className="col-lg-12">

						<div className="panel panel-primary">
							<div className="panel-heading">
								<h1 className="panel-title"><strong><i className="fa fa-download" aria-hidden="true"></i> {this.state.userName}</strong></h1>
								
							</div>
							<div className="panel-body">
								<ul className="list-group">
								 	{maker}
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
module.exports = AdminUserSurvey;