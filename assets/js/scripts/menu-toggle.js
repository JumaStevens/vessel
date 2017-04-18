var menu_toggle = {
	button: document.getElementsByClassName('menu-toggle'),

	handler: function(e) {
		const container = document.getElementsByClassName('container')[0];
		let menu_open = container.classList.contains('menu-open'); // is menu currently open
		
		if(e.type === 'click') {
			// open
			if(!menu_open) {
				container.classList.add('menu-open');
				container.classList.remove('menu-close');
				container.classList.remove('menu-close-hover');
			}
			// close
			else if(menu_open) {
				container.classList.add('menu-close');
				container.classList.remove('menu-open');
			}
		}
		else if(e.type === 'mouseenter' && !menu_open) {
			container.classList.add('menu-close-hover');
		}
		else if(e.type === 'mouseleave') {
			container.classList.remove('menu-close-hover');
		}

	},

	event_listener: function() {
		for(let i=0;i<menu_toggle.button.length;i++) {
			menu_toggle.button[i].addEventListener('click', menu_toggle.handler, false);
			menu_toggle.button[i].addEventListener('mouseenter', menu_toggle.handler, false);
			menu_toggle.button[i].addEventListener('mouseleave', menu_toggle.handler, false);
		}
	}
};