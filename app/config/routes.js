// Inclue the React library
var React = require('react');

// Include the Router
var Router = require('react-router');
var Route = Router.Route;



//  Include the IndexRoute (catch-all route)
var IndexRoute	= Router.IndexRoute;

// Reference the high-level components
var Selector = require('../components/Selector');

var Main = require('../components/Main');
var Search = require('../components/Search'); 
var Saved = require('../components/Saved');
var User = require('../components/User');
var Admin = require('../components/Admin');
var SurveyMakerName = require('../components/SurveyMakerName');
var SurveyMaker = require('../components/SurveyMaker');
var SurveyMakerFinnish = require('../components/SurveyMakerFinnish');
// Export the Routes
module.exports = (

	/*High level component is the Main component*/
	<Route path='/' component={Main}>

		{/* If user selects Search or Saved show the appropriate component*/}
		<Route path='Selector' component={Selector}/>
		
			<Route path='User' component={User} />
			<Route path='Admin' component={Admin} /> 

		<Route path='SurveyMakerName' component={SurveyMakerName} />
		<Route path='SurveyMaker' component={SurveyMaker} />
		<Route path='SurveyMakerFinnish' component={SurveyMakerFinnish}/>
		
		{/*If user selects any other path... we get the Home Route*/}
		<IndexRoute component={Selector} />

	</Route>


);