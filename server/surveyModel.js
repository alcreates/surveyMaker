var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SurveySchema = new Schema({
  title: {
    type: String,
  },
  questions: []
 
});

var Survey = mongoose.model('Survey', SurveySchema);
module.exports = Survey;
