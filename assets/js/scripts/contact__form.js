var contact_form = {
	form: document.getElementsByClassName('contact__form')[0],
	button: document.getElementsByClassName('contact__form-submit')[0],

	// form submission
	submit: function() {
		const form = contact_form.form;
    	// collect form data
    	let data = {
    		'name': form.name.value,
    		'email': form.email.value,
    		'message': form.message.value,
    		'company': form.company.value
    	};

    	// honeypot for spam bots
    	if(data.company) {
    		// spam
    		contact_form.response('error', 'spam');
    	} else {
    		// real person
    		ajax();
    		contact_form.response('sending');
    	}

    	// ajax
    	function ajax() {
	    	var xhr = new XMLHttpRequest();
	    	xhr.open(form.method, form.action);
	    	xhr.setRequestHeader('Content-Type', 'application/json');
	    	xhr.timeout = 15000;
	    	xhr.send(JSON.stringify(data));
	    	
	  		// ajax status
	    	xhr.onload = function() {
				// success
				if(JSON.parse(xhr.response).msg === 'success') {
					contact_form.response('success');
				}
				// error
				else {
					contact_form.response('error', JSON.parse(xhr.response).msg);
				}
			};

			xhr.onerror = function() {
				// error
				contact_form.response('error', xhr.status);
				console.log('xhr error: ' + xhr.status);
			};

	       	xhr.ontimeout = function() {
	       		xhr.abort();
	       		contact_form.response('error', 'timeout');
	       	};
	    };

       	// stop url change
		contact_form.form.preventDefault();
	},


	// submit response
	response: function(type, msg) {
		const container = document.getElementsByClassName('container')[0];
		const form = contact_form.form;
		const button = contact_form.button;
		const res_header = document.getElementsByClassName('contact__form-container')[0];
		const res_copy = document.getElementsByClassName('contact__response-text')[0];
		
		// handle responses
		if(type === 'sending') {
			container.classList.add('form-response');
			res_header.innerHTML = 'Sending...';
			res_copy.innerHTML = '';
		}
		else if(type === 'success') {
			container.classList.add('form-response');
			res_header.innerHTML = 'Message Sent.';
			res_copy.innerHTML = 'Thank you, we will respond as soon as we can.';
			// clear input values
			form.name.value = '';
			form.email.value = '';
			form.message.value = '';
 			// remove class
			setTimeout(function(){ 
				container.classList.remove('form-response');
				// add listener
				contact_form.event_listener();
				// return type value
				button.type = 'submit';
			}, 6000);
		}
		else if(type === 'error') {
			container.classList.add('form-response');
			res_header.innerHTML = 'Message Failure';
			
			if(msg === 'spam') {
				res_copy.innerHTML = 'Your message has been identified as spam.';
			}
			else if(msg === timeout) {
				res_copy.innerHTML = 'Unable to reach server; please try again.';
			}
			else {
				res_copy.innerHTML = 'Error: ' + msg +'; please try again.';
			}
			// remove class
			setTimeout(function(){
				container.classList.remove('form-response');
				// add listener
				contact_form.event_listener();
				// return type value
				button.type = 'submit';
			}, 6000);
		}
	},


	event_listener: function() {
		contact_form.form.addEventListener('submit', function form_submit() {
			contact_form.submit();
			// prevent user from submitting form with 'enter' if sending
			contact_form.button.type = '';
			// remove listener
			contact_form.removeEventListener('submit', form_submit, false);
		}, false);
	}
};