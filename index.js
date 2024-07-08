const express = require('express');
const app = express();
const port = 4000;
const middleware=require("./middlewares/IsAuth")

app.set('view engine', 'pug')
app.use(express.static("public"))
app.use(middleware)

app.get('/contact', function(req, res){
    res.render("contact")
   
    });

app.get('/', function(req, res){
        res.render("Home_page")
        });

app.get('/services', function(req, res){
            res.render("Our_Services")
            });
 
app.use(function(req, res, ){
    res.status(404).send('Page introuvable !')})


app.listen(port, function(){
  console.log('The server is running, ' +
      ' please, open your browser at http://localhost:%s', 
      port);
});

