  
/*grabbed from w3 schools*/
var https = require('https');
var dt = require('./myfirstmodule');
const port = process.env.PORT || 3000;

https.createServer(function (req, res){
	res.writeHead(200, {'Content-Type' : 'text/html'});
	res.write("The date and time are currently: " + dt.myDateTime());
	res.end();
})
.listen(port, ()=>{
    console.log('server is connected on port ' + port);
});