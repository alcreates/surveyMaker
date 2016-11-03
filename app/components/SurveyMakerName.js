var React = require('react');
var Router = require('react-router');

var SurveyMaker = require('./SurveyMaker');

var SurveyMakerName = React.createClass({
	getInitialState: function(){
		return {
			surveyName: "",
			submitted: false,
			
		}
	},
	handleChange(event) {
    		this.setState({surveyName : event.target.value});
 	 },
 	 handleSubmit(event) {
   			
   			 this.setState({submitted: true})
  		},
  	componentWillMount() {
  		this.setState({submitted:false, surveyName: ""});
  		
  		console.log("will mount;")
  	},



	render: function(){
		

		if(this.state.submitted == false){
		return(

			<div className = "main-container">
				<div className="row">
						<div className="col-lg-12">

							<div className="panel panel-primary">
								<div className="panel-heading">
									<h1 className="panel-title"><strong><i className="fa fa-newspaper-o" aria-hidden="true"></i> Survey Name</strong></h1>
								</div>
								<div className="panel-body">

									<h1>Enter Survey Name</h1>
									 <input type="text"
          								placeholder="Survey Name"
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
				
				<SurveyMaker  name={this.state.surveyName} />
				)
		}

	}


})


// Export the module back to the route
module.exports = SurveyMakerName;