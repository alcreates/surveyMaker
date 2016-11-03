var request = require("request");

var base_url = "http://localhost:3000/"

describe("Server test Home Page", function() {
  describe("GET /", function() {
    it("returns status code 200", function(done) {
      request.get(base_url, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });
  });
});

describe("Server test Admin Page ", function() {
  describe("GET /Admin", function() {
    it("returns status code 200", function(done) {
      request.get(base_url +"#/Admin", function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });
  });
});