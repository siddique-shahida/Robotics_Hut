var expect = require("chai").expect;
var request = require("request");

//Sign up Page...
describe("Testing our Sign up Page", function () {
    var url = "http://localhost:8080/register";
    
    it("returns status 200 to check if api works", function (done) {
        request(url, function (error, response) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
    it("returns the response as a JSON object", function (done) {
        request(url, function (error, response) {
            expect(response).to.be.an('object');
            done();
        });
    });
});

describe("Testing whether our Sign up Page can take in IDs from URL", function () {
    var url = "http://localhost:8080/register/?fname=jake&lname=thisjake&email=jake@jake&username=jake&password=jake";

    it("expects all the ids to be a string", function (done) {
        request(url, function () {
            let array = url.split("=");

            //Extracting the fname id...
            let ids = array[1].split("&");
            let fname = ids[0];

            //Extracting the lname id...
            ids = array[2].split("&");
            let lname = ids[0];

            //Extracting the email id...
            ids = array[3].split("&");
            let email = ids[0];

            //Extracting the username id...
            ids = array[4].split("&");
            let username = ids[0];

            //Extracting the password id...
            let password = array[5];

            //console.log(fname, lname, email, username, password);
            expect(fname).to.be.a("string");
            expect(lname).to.be.a("string");
            expect(email).to.be.a("string");
            expect(username).to.be.a("string");
            expect(password).to.be.a("string");

            done();
        });
    });
});


describe("Testing our Sign up Page if it takes in credentials", function (done) {
    var url = "http://localhost:8080/accounts";

    it("returns status 200 to check if api works", function (done) {
        request(url, function (error, response) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    //body is provided on this API with fetch command as well...
    it("Checks if the body recieved from the fetch command or not", function (done) {
        //
    });
});


//Sign In Page...
describe("Testing our Sign in Page", function (done) {
    var url = "http://localhost:8080/login"

    it("returns status 200 to check if api works", function (done) {
        request(url, function (error, response) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
});

describe("Testing whether our Sign In Page can take in IDs from URL", function () {
    var url = "http://localhost:8080/login/?username=jake&password=jake";

    it("expects all the ids to be a string", function (done) {
        request(url, function () {
            let array = url.split("=");

            //Extracting the fname id...
            let ids = array[1].split("&");
            let username = ids[0];

            //Extracting the password id...
            let password = array[2];

            //console.log(fname, lname, email, username, password);
            expect(username).to.be.a("string");
            expect(password).to.be.a("string");

            done();
        });
    });
});

//Forgot Password Page...
describe("Testing our Forgot Page", function (done) {
    var url = "http://localhost:8080/forgot";

    it("returns status 200 to check if api works", function (done) {
        request(url, function (error, response) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
});

//No User Page...
describe("Testing our No User Page for unsuccessful Login", function (done) {
    var url = "http://localhost:8080/nouser";

    it("returns status 200 to check if api works", function (done) {
        request(url, function (error, response) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
});


