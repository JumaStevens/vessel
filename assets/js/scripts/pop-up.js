// add listeners to footer Information links.
// add/remove classnames to container which triggers pop-up and displays appropriate content.
var pop_up = {

	handler: function(e) {
		const container = document.getElementsByClassName('container')[0];
		const exit = document.getElementsByClassName('pop-up__exit')[0];

		if(e.target.innerHTML === 'FAQ') {
			container.classList.add('pop-up-faq');
			container.classList.remove('pop-up-vendors');
			container.classList.remove('pop-up-careers');
		}
		else if(e.target.innerHTML === 'Vendors') {
			container.classList.add('pop-up-vendors');
			container.classList.remove('pop-up-faq');
			container.classList.remove('pop-up-careers');
		}
		else if(e.target.innerHTML === 'Careers') {
			container.classList.add('pop-up-careers');
			container.classList.remove('pop-up-faq');
			container.classList.remove('pop-up-vendors');
		}
		
		// add listener to exit button.
		exit.addEventListener('click', function pop_up_exit() {
			container.classList.remove('pop-up-faq');
			container.classList.remove('pop-up-vendors');
			container.classList.remove('pop-up-careers');
			// remove listener
			exit.removeEventListener('click', pop_up_exit, false);
		}, false);
	},

	event_listener: function() {
		const link = document.getElementsByClassName('footer__pop-up');
	
		for(let i=0;i<link.length;i++) {
			link[i].addEventListener('click', pop_up.handler, false);
		}
	}
};