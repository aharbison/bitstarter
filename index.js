var express = require('express')
var app = express();

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

var contents = fs.readFileSync('index.html');
var contentString = Buffer.toString(contents);

app.get('/', function(request, response) {
  response.send(contentString)
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
