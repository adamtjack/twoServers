var http = require("http");

var PORTALPHA = 7000;
var PORTBRAVO = 7500;

function handleRequestAlpha(request, response) {
    response.end("You are an amazing person!");
}
function handleRequestBravo(request, response) {
    response.end("You're starting to smell, it's time to shower!");
}

var serverAlpha = http.createServer(handleRequestAlpha);
var serverBravo = http.createServer(handleRequestBravo);

serverAlpha.listen(PORTALPHA, function() {
    console.log("Server listening on: http://localhost:" + PORTALPHA);
});

serverBravo.listen(PORTBRAVO, function() {
    console.log("Server listening on: http://localhost:" + PORTBRAVO);
});

