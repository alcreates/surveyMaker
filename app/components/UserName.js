var React = require('react');
var Router = require('react-router');
var User = require('./User');

// USER # 1
// This is the first component in User workflow
// Component gets user name, and passes it on to the User component props.
var UserName = React.createClass({
	getInitialState: function(){
		return {
			userName: "",
			submitted: false,
			
		}
	},
	handleChange(event) {
    		this.setState({userName : event.target.value});
 	 },
 	 handleSubmit(event) {
   			
   			 this.setState({submitted: true})
  		},
  	componentWillUnMount() {
  		this.setState({submitted:false, userName: ""});
  		
  		console.log("will unmount;")
  	},



	render: function(){
		

		if(this.state.submitted == false){
		return(

			<div className = "main-container">
				<div className="row">
						<div className="col-lg-12">

							<div className="panel panel-primary">
								<div className="panel-heading">
									<h1 className="panel-title"><strong><i className="fa fa-newspaper-o" aria-hidden="true"></i> User Name</strong></h1>
								</div>
								<div className="panel-body">

									<h1>Enter your name</h1>
									 <input type="text"
          								placeholder="Hello!"
         								 value={this.state.userName}
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
				
				<User  name={this.state.userName} />
				)
		}

	}


})

// Export the module back to the route
module.exports = UserName;