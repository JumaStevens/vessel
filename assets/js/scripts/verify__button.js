var verify = {
	button: [document.getElementsByClassName('verify__button-0')[0], document.getElementsByClassName('verify__button-1')[0]],
	verified: false,

	handler: function(e) {
		const container = document.getElementsByClassName('container')[0];
		const button_container = document.getElementsByClassName('verify__button-container')[0];
		const subtext = document.getElementsByClassName('verify__subtext')[0];

		if(e.target === verify.button[0]) {
			container.classList.add('verify-success');
			container.classList.add('nav-about');
		}
		else if(e.target === verify.button[1]) {
			var original_subtext = subtext.innerHTML;
			subtext.innerHTML = 'We&#39;re sorry! You must be 21+ to continue.';
			container.classList.add('verify-failure');

			// reset verification
			setTimeout(function() {
				subtext.innerHTML = original_subtext;
				container.classList.remove('verify-failure');
				// add listener
				verify.verified = false;
				verify.event_listener();
			}, 5000);
		}
		// remove listener
		verify.verified = true;
		verify.event_listener();
	},

	event_listener: function() {
		if(!verify.verified) {
			verify.button[0].addEventListener('click', verify.handler, false);
			verify.button[1].addEventListener('click', verify.handler, false);
		} else {
			verify.button[0].removeEventListener('click', verify.handler, false);
			verify.button[1].removeEventListener('click', verify.handler, false);
		}
	}
};

verify.event_listener();