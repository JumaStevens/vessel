var menu_toggle = {
	button: document.getElementsByClassName('menu-toggle'),
	active: false,

	handler: function(e) {
		const container = document.getElementsByClassName('container')[0];
		
		if(e.type === 'click') {
			// open
			if(!menu_toggle.active) {
				menu_toggle.active = true;
				container.classList.add('menu-open');
				container.classList.remove('menu-close');
			}
			// close
			else if(menu_toggle.active) {
				menu_toggle.active = false;
				container.classList.add('menu-close');
				container.classList.remove('menu-open');
			}
		}
		else if(e.type === 'mouseenter') {
			if(!menu_toggle.active) {
				container.classList.add('menu-close-hover');
			}
			else if(menu_toggle.active) {
				container.classList.add('menu-open-hover');
			}
		}
		else if(e.type === 'mouseleave') {
			container.classList.remove('menu-close-hover');
			container.classList.remove('menu-open-hover');
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

menu_toggle.event_listener();