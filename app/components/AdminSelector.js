var React = require('react');
var Router = require('react-router')
var buttonStyle = {
	width: 200,
	height:100,
	position: 'relative',
	top: 100,
}
var adminBoxStyle = {

	height: 500
}


var AdminSelector = React.createClass({
	buttonClicked: function(event){
		console.log(event.target.value);
		var clientChoice = event.target.value;
		if(clientChoice == 'viewSurvey'){
			
			this.props.history.push("/User");
		}
		if(clientChoice == 'viewUsers'){
			console.log(this.props.history);
			this.props.history.push('/AdminUserList');
		}
	},

	render: function(){

		return(

			<div className = "main-container">
				<div className="row">
						<div className="col-lg-12">

							<div className="panel panel-primary" style={adminBoxStyle}>
								<div className="panel-heading">
									<h1 className="panel-title"><strong><i className="fa fa-newspaper-o" aria-hidden="true"></i>  Admin Selector</strong></h1>
								</div>
								<div className="panel-body">

									<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
											<div class="row">
												<button value='viewSurvey' onClick={this.buttonClicked} type="button" className="btn btn-primary center-block" style={buttonStyle}>View Survey's</button>
											</div>
									</div>
									<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
											<div className="row">
												<button value='viewUsers' onClick={this.buttonClicked} type="button" className="btn btn-primary center-block" style={buttonStyle}>View User's</button>
											</div>
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
module.exports = AdminSelector;