const express = require('express');
const router = express.Router();
const path = require('path');
const bodyParser = require('body-parser');
const validator = require('validator');
// 'use strict';
const nodemailer = require('nodemailer');

// parse
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


// handle contact form submission
router.post('/contact_form', function(req, res) {

	// honeypot for spam
	if(!validator.isEmpty(req.body.company)) {
		res.json({ msg: 'spam' });
	} else {
		// validate and process request
		if(validator.isEmail(req.body.email)) {
			// create reusable transporter object using the default SMTP transport
			let transporter = nodemailer.createTransport({
			    service: 'gmail',
			    auth: {
			        user: 'jumastevens.contact@gmail.com',
			        pass: process.env.GMAIL_PASS
			    }
			});

			// setup email data with unicode symbols
			let mailOptions = {
			    from: '"'+ req.body.name +' 🌱" <jumastevens.contact@gmail.com>', // sender address
			    to: 'jumastevens@gmail.com', // list of receivers
			    subject: 'Contact Form Message', // Subject line
			    html: '<ul><li>From: '+req.body.name+'</li><li>Email: '+req.body.email+'</li><li>'+req.body.message+'</li></ul>' // html body
			};

			// send mail with defined transport object
			transporter.sendMail(mailOptions, (error, info) => {
			    if(error) {
			        res.json({ msg: error });
			    } else {
			    	res.json({ msg: 'success' });
			    }
			});

		} else {
			res.json( { msg: 'Invalid form field(s)'} );
		}
	}
});

module.exports = router;