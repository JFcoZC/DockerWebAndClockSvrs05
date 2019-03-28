/**
*Jose Francisco Zeron Cabrera
*154678
*
*Server file.
*
*File that contents functions that supply the clock information requested by clients using the
*help of the Express framework.
*/

/**Load module from express folder/library*/
const express = require('express');
var app = express();

/**Enable to avoid cors error that ocurrs when client URL and server do not match*/
var cors = require('cors');
app.use(cors());

/**
*Handler of an HTTP get request returning actual time on JSON
*@param {string} URL - sever/serverTime
*@param {function} function that is executed as a result of the request - Arrow function (=>) with 2 arguments
*/
app.get('/serverTime' , (req,res) => {

	/**Respond to request: sending actual time in miliseconds back on JSON format*/
	res.json({
		data: Date.now()
	});

});
/**End of HTTP get Handelr for serverTime */

/**
*Handler of an HTTP get request returning actual time on JSON
*@param {string} URL - root directory
*@param {function} function that is executed as a result of the request - Arrow function (=>) with 2 arguments
*/
app.get('/' , (req,res) => {

	/**Test to send some data on JSON format*/
	res.send({
		name : 'Andrew',
		location : 'Puebla'
	});

});
/**End of HTTP get Handelr for root folder*/


app.listen(3000);
console.log('server listening in port 3000');