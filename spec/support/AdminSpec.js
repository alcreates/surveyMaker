var React = require('react');
var ReactDOM = require('react-dom');
var Admin = require('../../app/components/Admin.js');


describe('Admin', function(){
	var Utils = React.addons.TestUtils;


	it('renders the login component', function(){
		var component, element;

		element = React.createElement(
			Admin,{}
			);
	





		expect(function(){
			component = Utils.renderIntoDocument(element);
		}).not.toThrow()







	});
	


});