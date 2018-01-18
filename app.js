const express = require('express'),
	app = express();

app.listen(process.env.PORT || 3000);

app.use(express.static('public'));
app.use(function(req, res, next) {  
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

// require('./app/routes')(app);    

app.get('/*', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});