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
var UserSurvey = require('../components/UserSurvey');
var UserName = require('../components/UserName');
var AdminSelector = require('../components/AdminSelector');
var AdminUserList = require('../components/AdminUserList');
var AdminUserSurveyList = require('../components/AdminUserSurveyList');
var AdminUserSurvey = require('../components/AdminUserSurvey');
// Export the Routes
module.exports = (

	/*High level component is the Main component*/
	<Route path='/' component={Main}>

		{/* If user selects Search or Saved show the appropriate component*/}
		<Route path='Selector' component={Selector}/>
		
			<Route path='User' component={User} />
			<Route path='Admin' component={Admin} /> 
			<Route path='UserName' component={UserName}/>
			<Route path='AdminSelector' component={AdminSelector}/>
			<Route path='AdminUserList' component={AdminUserList}/>
			<Route path='AdminUserSurvey' component={AdminUserSurvey}/>
			<Route path='AdminUserSurveyList' component={AdminUserSurveyList}/>
		<Route path='SurveyMakerName' component={SurveyMakerName} />
		<Route path='SurveyMaker' component={SurveyMaker} />
		<Route path='SurveyMakerFinnish' component={SurveyMakerFinnish}/>
		<Route path='UserSurvey' component={UserSurvey}/>
		
		{/*If user selects any other path... we get the Home Route*/}
		<IndexRoute component={Selector} />

	</Route>


);