var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// for parsing application/json
app.use(bodyParser.json()); 

app.get('/message', function (req, res) {
	var response = {
		code: "0",
		message: "hello",
		data: {
			message: "hello from get method!"
		}
	}
	res.send(response);
});

app.post('/message', function (req, res) {
	var personInfo = req.body; //Get the parsed information

	if (!personInfo.name || !personInfo.age) {
		res.render('show_message', {
			message: "Sorry, you provided worng info", type: "error"
		});

	} else {
		response = {
			code: "0",
			message: "hello",
			data: {
				message: "you are " + personInfo.name + " " + personInfo.age + " year olds",
			}
		}
		
		res.send(response);
	}
});

app.listen(3000);