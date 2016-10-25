var React = require('react');
var Router = require('react-router')
var question = [];

var SurveyMaker = React.createClass({
	getInitialState: function(){
		return {
			surveyName: "",
			submitted: false,
			question:"",
		}
	},
	handleChange(event) {
    		this.setState({surveyName : event.target.value});
 	 },
 	 handleSubmit(event) {
   			 alert("Text field value is: '" + this.state.surveyName + "'");
   			 this.setState({submitted: true})
  		},
  	handleQuestionSubmit(event){
  		
  		var singleQuestion = this.state.question
  		question.push(singleQuestion);
  		console.log(question);
  		this.setState({question:""})
  	},
  	handleQuestionChange(event){
  			this.setState({question: event.target.value});
  	},


	render: function(){
		

		if(this.state.submitted == false){
		return(

			<div className = "main-container">
				<div className="row">
						<div className="col-lg-12">

							<div className="panel panel-primary">
								<div className="panel-heading">
									<h1 className="panel-title"><strong><i className="fa fa-newspaper-o" aria-hidden="true"></i>  User</strong></h1>
								</div>
								<div className="panel-body">

									<h1>This is the surveyMaker page</h1>
									 <input type="text"
          								placeholder="Hello!"
         								 value={this.state.surveyName}
         								 onChange={this.handleChange} />
       								 <button onClick={this.handleSubmit}>Submit</button>

								</div>
							</div>

						</div>
					</div>		
			</div>



			)
		}else{
			return(
				<div className = "main-container">

					<div className="row">
						<div className="col-lg-12">

							<div className="panel panel-primary">
								<div className="panel-heading">
									<h1 className="panel-title"><strong><i className="fa fa-newspaper-o" aria-hidden="true"></i>  User</strong></h1>
								</div>
								<div className="panel-body">

									
									 <input type="text"
          								placeholder="Add a question"
         								 value={this.state.question}
         								 onChange={this.handleQuestionChange} />
       								 <button onClick={this.handleQuestionSubmit}>Submit</button>

								</div>
							</div>

						</div>
					</div>		
					
				</div>


				)
		}

	}


})


// Export the module back to the route
module.exports = SurveyMaker;