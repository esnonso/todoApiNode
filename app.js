const express = require('express');
    app = express()
const  bodyParser = require('body-parser');

const todoRoutes = require('./routes/todo');

const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(express.static(__dirname + '/views'))

app.get('/', (req, res)=>(
    res.sendFile("index.html")
))

app.use('/api/todos', todoRoutes)

app.listen(3000, function(){
    console.log("Server is running....")
})