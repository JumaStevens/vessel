var leafly = {
	iframe: document.getElementsByClassName('store-menu__leafly')[0],
	src: 'http://www-vesselpdx-com.usrfiles.com/html/fef372_e4240a5365c2d25ff94de84560f07782.html',

	handler: function() {
		leafly.iframe.src = leafly.src;

		leafly.iframe.addEventListener('load', function load() {
			leafly.iframe.removeEventListener('load', load, false);
			leafly.event_handler();
		}, false);

	},

	event_handler: function() {
		const refresh_button = document.getElementsByClassName('store-menu__leafly-refresh')[0];
		
		refresh_button.addEventListener('click', function refresh() {
			refresh_button.removeEventListener('click', refresh, false);
			leafly.handler();
		}, false);
	}
};