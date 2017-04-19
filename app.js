const express = require('express');
const app = express();


// home route
app.use(require('./routes/index.js'));
// contact form route
app.use(require('./routes/contact_form'));

// pointer to assets
app.use(express.static('assets'));


// set server port
var port = process.env.PORT || 8080;
// start server
app.listen(port, function() {
	console.log('Server is now listening!');
});