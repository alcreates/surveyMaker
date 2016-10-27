// Include the Main React Dependencies
var React = require('react');
var ReactDOM = require('react-dom');
import { browserHistory } from 'react-router'
import {hashHistory} from 'react-router'

// Grab the proeprty associated with the Router
var Router = require('react-router').Router

// Grabs the Routes
var routes = require('./config/routes');

// Renders the contents according to the route page. 
// Displays the contents in the div app of index.html
// Note how ReactDOM takes in two parameters (the contents and the location)
ReactDOM.render(

	<Router history={hashHistory} routes={routes}/>,
	document.getElementById('app')
)


