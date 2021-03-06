var React = require('react');
var Router = require('react-router');
var questions = [];
var helpers = require('../utils/helpers.js');
var SurveyMakerFinnish = require('./SurveyMakerFinnish');

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
  	handleSubmit(event){
  			var title = this.state.surveyName;

  			helpers.postSaved(title, questions)
			.then(function(data){
				console.log(this.state.submitted);
				
				this.setState({submitted:true});

			}.bind(this))


  	},
  	componentWillUnmount:function(){

  		this.setState({submitted:false});
  		this.setState({question:""})
  		questions =[];

  	},

  


	render: function(){
	 if(this.state.submitted){
	 	console.log("survey maker props " + this.props);
	 	return(<SurveyMakerFinnish/>);

	 }	
	
	
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
		<div className = "main-container">
				<div className="row">
						<div className="col-lg-12">

							<div className="panel panel-primary">
								<div className="panel-heading">
									<h1 className="panel-title"><strong><i className="fa fa-newspaper-o" aria-hidden="true"></i>  User</strong></h1>
								</div>
								<div className="panel-body">

									<h1>Add a question</h1>
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


			<div className="main-container">
				<div className="row">
					<div className="col-lg-12">

						<div className="panel panel-primary">
							<div className="panel-heading">
								<h1 className="panel-title"><strong><i className="fa fa-download" aria-hidden="true"></i> added questions</strong></h1>
							</div>
							<div className="panel-body">
								<ul className="list-group">
								  {questionList}
								</ul>
							</div>
						</div>

					</div>
				</div>
				<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
							<div className="row">
								<button value='Admin' onClick={this.handleSubmit} type="button" className="btn btn-primary pull-right" >Submit</button>
							</div>
				</div>	


			</div>

		
	</div>

		)	

	}


})


// Export the module back to the route
module.exports = SurveyMaker;