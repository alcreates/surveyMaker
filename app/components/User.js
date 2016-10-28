var React = require('react');
var Router = require('react-router');
var helpers = require('../utils/helpers.js');

var User = React.createClass({
	getInitialState: function(){
		return {
			savedSurveys: ""
		}
	},

	componentDidMount(){

		helpers.getSaved()
			.then(function(Data){
				this.setState({
					savedSurveys: Data.data
				});
				console.log("saved results " + Data.data);
			}.bind(this))
	},

	// /*This code handles the sending of the search terms to the parent Search component*/
	
	render: function(){

		if (this.state.savedSurveys == "") {
			return(

				<li className="list-group-item">

					<h3>
					  	<span><em>No Surveys available ...</em></span>
					</h3>

			  	</li>

			)
		}

		else {

			var surveys = this.state.savedSurveys.map(function(survey, index){

				return(

						<div key={index}>

						  <li className="list-group-item" >

							<h3>
							  	<span><em>{survey.title}</em></span>
								<span className="btn-group pull-right" >
									<button className="btn btn-default ">Complete Survey</button>
									
								</span>
							</h3>
							

						  </li>

						</div>
				)

			}.bind(this))

		}


		return(
			<div className="main-container">
				<div className="row">
					<div className="col-lg-12">

						<div className="panel panel-primary">
							<div className="panel-heading">
								<h1 className="panel-title"><strong><i className="fa fa-download" aria-hidden="true"></i> Saved Articles</strong></h1>
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
module.exports = User;