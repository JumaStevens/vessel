var nav = {
	button: document.getElementsByClassName('nav__button'),
	holder: ['about', 'highlights', 'store-menu', 'location', 'contact', 'footer'],
	indicator: 0,

	handler: function(e) {
		const container = document.getElementsByClassName('container')[0];

		if(e.target === nav.button[0] && nav.indicator > 0) {
			// clear nav-names
			for(let i=0;i<nav.holder.length;i++) {
				container.classList.remove('nav-'+nav.holder[i]);
			}
			// add nav-name
			nav.indicator -= 1;
			container.classList.add('nav-'+nav.holder[nav.indicator]);
		}
		else if(e.target === nav.button[1] && nav.indicator < nav.holder.length -1) {
			// clear nav-names
			for(let i=0;i<nav.holder.length;i++) {
				container.classList.remove('nav-'+nav.holder[i]);
			}
			// add nav-name
			nav.indicator += 1;
			container.classList.add('nav-'+nav.holder[nav.indicator]);
		}
	},

	event_listener: function() {
		for(let i=0;i<nav.button.length;i++) {
			nav.button[i].addEventListener('click', nav.handler, false);
		}
	}
};