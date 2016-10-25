var React = require('react');
var Router = require('react-router')


var User = React.createClass({

	render: function(){

		return(

			<div className = "main-container">
				<div className="row">
						<div className="col-lg-12">

							<div className="panel panel-primary">
								<div className="panel-heading">
									<h1 className="panel-title"><strong><i className="fa fa-newspaper-o" aria-hidden="true"></i>  User</strong></h1>
								</div>
								<div className="panel-body">

									<h1>This is the user page</h1>

								</div>
							</div>

						</div>
					</div>		
			</div>



			)
	}


})


// Export the module back to the route
module.exports = User;