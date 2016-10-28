var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSurveySchema = new Schema({
  userName: {
    type: String,
  },
  surveyType: {
    type: String,
  },
  answers: {}
 
});

var UserSurvey = mongoose.model('UserSurvey', UserSurveySchema);
module.exports = UserSurvey;
