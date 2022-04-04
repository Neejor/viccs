const express = require('express'); //express framework to have a higher level of methods
const app = express(); //assign app variable the express class/method
const cors = require("cors");
app.use(cors());
app.use(express.json());

var path = require("path");
var personPresent = false;

app.get("/getVal", (req,res) => {
	console.log("getVal request");
	res.send({val: personPresent});
})

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.post("/",(req,res)=>{
	personPresent = req.body.val;
	console.log("personPresent: ", personPresent);
	res.send("Coo")
})


const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
	console.log("Listening ma g");
});
