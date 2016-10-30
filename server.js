// Include Server Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

//Require Schemas
//var Article = require('./server/model.js');
var Survey = require('./server/surveyModel.js')
var UserSurvey = require('./server/UserSurvey.js')

// Create Instance of Express
var app = express();
var PORT = process.env.PORT || 3000; // Sets an initial port. We'll use this later in our listener

// Run Morgan for Logging
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static('./public'));

// -------------------------------------------------

// MongoDB Configuration configuration
mongoose.connect('mongodb://alvaro:everplans@ds031845.mlab.com:31845/everplans');
var db = mongoose.connection;

db.on('error', function (err) {
	console.log('Mongoose Error: ', err);
});

db.once('open', function () {
	console.log('Mongoose connection successful.');
});



// -------------------------------------------------

// Main Route
app.get('/', function(req, res){
	res.sendFile('./public/index.html');
})

// Route to get all saved surveys
app.get('/api/saved', function(req, res) {

	Survey.find({})
		.exec(function(err, doc){

			console.log(doc);

			if(err){
				console.log(err);
			}
			else {
				res.send(doc);
			}
		})
});

app.get('/usersSaved', function(req, res) {

	UserSurvey.find({})
		.exec(function(err, doc){

			console.log(doc);

			if(err){
				console.log(err);
			}
			else {
				res.send(doc);
			}
		})
});

app.get('/usersNames', function(req, res) {
    

	UserSurvey.find({}).distinct('userName')
		.exec(function(err, doc){

			console.log(doc);

			if(err){
				console.log(err);
			}
			else {
				res.send(doc);
			}
		})
});

app.get('/selectedUserSurveys', function(req, res) {
     console.log("selected user Survey req " + req.param('userName'));

		UserSurvey.find({'userName':req.param('userName') })
		.exec(function(err, doc){

			console.log(doc);

			if(err){
				console.log(err);
			}
			else {
				res.send(doc);
			}
		})
});

app.get('/selectedSurvey', function(req, res) {
     console.log("selected user Survey req " + req.param('title'));

		Survey.find({'title':req.param('title') })
		.exec(function(err, doc){

			console.log(doc);

			if(err){
				console.log(err);
			}
			else {
				res.send(doc);
			}
		})
});



// Route to add an survey to saved list
app.post('/api/saved', function(req, res){
	var newSurvey = new Survey(req.body);

	console.log(req.body)

	//var title = req.body.title;
	//var date = req.body.date;
	

	newSurvey.save(function(err, doc){
		if(err){
			console.log(err);
		} else {
			res.send(doc._id);
		}
	});
});

app.post('/userSurveySaved', function(req, res){
	var newUserSurvey = new UserSurvey(req.body);

	console.log(req.body);

	newUserSurvey.save(function(err, doc){
		if(err){
			console.log(err);
		}else{
			res.send(doc._id);
		}
	});
});

// Route to delete an article from saved list
app.delete('/api/saved/', function(req, res){

	var url = req.param('url');

	Article.find({"url": url}).remove().exec(function(err, data){
		if(err){
			console.log(err);
		}
		else {
			res.send("Deleted");
		}
	});
});


// -------------------------------------------------

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});
