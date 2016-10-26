var React = require('react');
var Router = require('react-router')
var questions = [];

var SurveyMaker = React.createClass({
	getInitialState: function(){
		return {
			surveyName: this.props.name,
			submitted: false,
			question:"",
		}

	},
	handleChange(event) {
    		this.setState({question : event.target.value});
 	 },
 	handleAddQuestion(event) {
   			 var singleQuestion = this.state.question
  					console.log(singleQuestion);
  					questions.push(singleQuestion);
  					console.log(questions);
  					this.setState({question:""})
  		},
  


	render: function(){
	
	if(!questions){	
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
          								placeholder="Add question!"
         								 value={this.state.question}
         								 onChange={this.handleChange} />
       								 <button onClick={this.handleAddQuestion}>Add</button>

								</div>
							</div>

						</div>
					</div>		
			</div>

		)
	}else {

		var questionList = questions.map(function(item, index){

				return(

						<div key={index}>

						  <li className="list-group-item" >

							<h3>
							  	<span><em>{item}</em></span>
								
							</h3>
							


						  </li>

						</div>
				)

			}.bind(this))


	}
	return(
	<div className="main-container">	
			<div className="main-container">
				<div className="row">
					<div className="col-lg-12">

						<div className="panel panel-primary">
							<div className="panel-heading">
								<h1 className="panel-title"><strong><i className="fa fa-download" aria-hidden="true"></i> Saved Articles</strong></h1>
							</div>
							<div className="panel-body">
								<ul className="list-group">
								  {questionList}
								</ul>
							</div>
						</div>

					</div>
				</div>


			</div>

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
          								placeholder="Add question!"
         								 value={this.state.question}
         								 onChange={this.handleChange} />
       								 <button onClick={this.handleAddQuestion}>Add</button>

								</div>
							</div>

						</div>
					</div>		
			</div>	
	</div>

		)	

	}


})


// Export the module back to the route
module.exports = SurveyMaker;