var http = require("http");
var PORTONE = 7000;
var PORTTWO = 7500;

function requestPortOne(request, response) {
    response.end("hello beutiful!");
}
var serverOne = http.createServer(requestPortOne);
serverOne.listen(PORTONE, function () {
    console.log("Server Listening on: http://localhost:" + PORTONE);
});

function requestPortTwo(request, response) {
    response.end("you're so uggly!");
}
var serverTwo = http.createServer(requestPortTwo);
serverTwo.listen(PORTTWO, function () {
    console.log("Server listening on: http:/localhost:" + PORTTWO)

});
