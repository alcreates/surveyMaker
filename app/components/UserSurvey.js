// Include React and React-Router dependencies
var React = require('react');
var Router = require('react-router');
var helpers = require('../utils/helpers');
var answers = {};

// Include the Helper (for the query)
var helpers = require('../utils/helpers');

// Create the Main component
var UserSurvey = React.createClass({

	/*Here we set the initial state variables (this allows us to propagate the variables for maniuplation by the children components*/
	/*Also note the "resuls" state. This will be where we hold the data from our results*/
	getInitialState: function(){
		return { 
			userName: this.props.name,
			questionTitle: this.props.surveyPick.title,
			questions: this.props.surveyPick.questions,
			response:[]

		}
	},
	handleSubmit: function(){
		console.log(answers);
		console.log(this.state.userName);
		helpers.userSurveySaved(this.state.userName, this.state.questionTitle, answers)
			.then(function(data){
				console.log("userSurvey worked");
			}.bind(this))


	},

	
	// Whenever we detect ANY change in the textbox, we register it. 
    handleChange: function(event) {
    	console.log("TEXT CHANGED");

    	// Here we create syntax to capture any change in text to the query terms (pre-search).
    	// See this Stack Overflow answer for more details: 
    	// http://stackoverflow.com/questions/21029999/react-js-identifying-different-inputs-with-one-onchange-handler
    	
    	answers[event.target.id] = event.target.value;
    	
    },

	/*Render the function. Note how we deploy both the Query and the Results*/
	render: function(){
		
		var questionCompiler = this.state.questions.map(function(question, index){

				return(

						<div key={index}>

						  <li className="list-group-item" >

							<h3>
							  	<span><em>{question}</em></span>
								
								 
							</h3>
							<div className="input-group input-group-lg">
							<span className="input-group-addon" id="sizing-addon1"></span>
							<input type="text" id={index} onChange={this.handleChange} className="form-control" placeholder="Username" aria-describedby="sizing-addon1"></input>
							</div>	
						  </li>

						</div>

						
 



				)

			}.bind(this));	








		return(

			<div className="main-container"> 

				{/*Note how we pass the setQuery function to enable Query to perform searches*/}
				<h1>This is the User Survey page</h1>
				<h2>{this.state.questionTitle}</h2>
				<div className="panel-body">
								<ul className="list-group">
								  {questionCompiler}
								</ul>
				</div>

				<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
							<div className="row">
								<button value='Admin' onClick={this.handleSubmit} type="button" className="btn btn-primary pull-right" >Submit</button>
							</div>
				</div>
				

			</div>

		)
	}
});

// Export the module back to the route
module.exports = UserSurvey;