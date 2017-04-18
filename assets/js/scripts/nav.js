var nav = {
	button: document.getElementsByClassName('nav__button'),
	menu: document.getElementsByClassName('menu-nav__link'),
	footer: document.getElementsByClassName('footer__nav'),
	holder: ['about', 'highlights', 'store-menu', 'location', 'contact', 'footer'],
	indicator: 0,

	handler: function(e) {
		const container = document.getElementsByClassName('container')[0];
		let t = e.target.innerHTML;

		// handle button navigation
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

		// handle link navigation
		else if(t === 'About') {
			for(let i=0;i<nav.holder.length;i++) {
				container.classList.remove('nav-'+nav.holder[i]);
			}
			nav.indicator = 0;
			container.classList.add('nav-'+nav.holder[nav.indicator]);
		}
		else if(t === 'Menu') {
			for(let i=0;i<nav.holder.length;i++) {
				container.classList.remove('nav-'+nav.holder[i]);
			}
			nav.indicator = 2;
			container.classList.add('nav-'+nav.holder[nav.indicator]);
		}
		else if(t === 'Location') {
			for(let i=0;i<nav.holder.length;i++) {
				container.classList.remove('nav-'+nav.holder[i]);
			}
			nav.indicator = 3;
			container.classList.add('nav-'+nav.holder[nav.indicator]);
		}
		else if(t === 'Contact') {
			for(let i=0;i<nav.holder.length;i++) {
				container.classList.remove('nav-'+nav.holder[i]);
			}
			nav.indicator = 4;
			container.classList.add('nav-'+nav.holder[nav.indicator]);
		}

		// close menu
		if(container.classList.contains('menu-open')) {
			container.classList.remove('menu-open');
			container.classList.add('menu-close');
		}
		
	},

	event_listener: function() {
		// add listener to nav buttons
		for(let i=0;i<nav.button.length;i++) {
			nav.button[i].addEventListener('click', nav.handler, false);
		}
		// add listener to nav links
		for(let i=0;i<nav.menu.length;i++) {
			nav.menu[i].addEventListener('click', nav.handler, false);
		}
		for(let j=0;j<nav.footer.length;j++) {
			nav.footer[j].addEventListener('click', nav.handler, false);
		}
	}
};