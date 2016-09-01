/** ---------- THIRD PARTY MODULES ---------- **/

var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


var createhero = require("./routes/createhero");
var deletehero = require("./routes/deletehero");
var retrievehero = require("./routes/retrievehero");


/** ---------- OUR MODULES ---------- **/  //create routes directory
app.use('/createhero', createhero);
app.use('/deletehero', deletehero);
app.use('/retrievehero', retrievehero);



/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); //needed for angular requests
app.use(bodyParser.urlencoded({extended: true})); //probably not needed
app.use('/public', express.static(path.join(__dirname, './public')));



/** ---------- EXPRESS ROUTES ---------- **/


/** ---------- MONGOOSE CONNECTION HANDLING ---------- **/

var databaseUri = 'mongodb://localhost:27017/omicron';  //CONFIRM DATABASE NAME

mongoose.connect(databaseUri);

mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ', databaseUri);
});

mongoose.connection.on('error', function (err) {
  console.log('Mongoose failed to connect because error: ', err);
});





/** ----------AJAX---------- **/
app.get('/power', function(req, res) {
    Powers.find({}, function(err, data) {
        if(err) {
            console.log('ERR: ', err);
        }

        res.send(data);
    });
});


app.post('/hero', function(req, res) {
    var newHero = new Hero({
        "alias": req.body.alias,
        "first_name": req.body.first_name,
        "last_name": req.body.last_name,
        "city": req.body.city,
        "alias": req.body.alias,
        primary_power: req.body.primary_power
    });

    newHero.save(function(err, data) {
        if(err) {
            console.log('ERR: ', err);
        }

        Hero.find({}, function(err, data) {
            if(err) {
                console.log('ERR: ', err);
            }

            res.send(data);
        });
    });


});


app.get('/hero/:power', function(req, res) {
    Hero.find({"primary_power" : req.params.power}, function(err, data) {
        if(err) {
            console.log('ERR: ', err);
        }

        res.send(data);
    });
});


app.delete('/hero/:id', function(req, res) {
    Hero.findByIdAndRemove({"_id" : req.params.id}, function(err, data) {
        if(err) {
            console.log('ERR: ', err);
        }

        res.send(data);
    });
});






app.get('/*', function (req, res) {
  var file = req.params[0] || '/views/index.html';
  res.sendFile(path.join(__dirname, './public', file));
});

/** ---------- START SERVER ---------- **/
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function () {
  console.log('Listening on port ', app.get('port')); //actively listening for requests
});
