  
/*grabbed from w3 schools*/
var express = require('express');
var dt = require('./myfirstmodule');
const path = require('path');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT || 8080;

const publicDirectory=path.join(__dirname, '../');
const viewsPath = path.join(__dirname, '../templates/views');

app.set('view engine', 'hbs');
app.set('views', viewsPath);
app.engine('hbs', require('hbs').__express);


app.use(express.static(publicDirectory));

app.get('',(req,res)=>{
    res.render('date', {
        date: dt.myDateTime
    });
});


app.listen(port, ()=>{
    console.log('server is connected on port ' + port);
});