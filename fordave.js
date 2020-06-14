  
/*grabbed from w3 schools*/
var express = require('express');
var dt = require('./myfirstmodule');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

const publicDirectory=path.join(__dirname, '../');
const viewsPath = path.join(__dirname, '../views');

app.set('view engine', 'hbs');
app.set('views', viewsPath);
app.engine('hbs', require('hbs').__express);


app.use(express.static(publicDirectory));

app.get('./',(req,res)=>{
    res.render('date', {
        date: myDateTime()
    });
});


app.listen(port, ()=>{
    console.log('server is connected on port ' + port);
});