  
/*grabbed from w3 schools*/
var https = require('https');
var dt = require('./myfirstmodule');
const port = process.env.PORT || 3000;
const address = process.argv[2];

https.createServer.get ('',(req, res) => {
	res.writeHead(200, {'Content-Type' : 'text/html'}),
	res.write('<p>"The date and time are currently: " + dt.myDateTime()</p>'),
    res.end()
    console.log(res.write);
})
.listen(port, ()=>{
    console.log('server is connected on port ' + port);
});