window.addEventListener('load', function load() {
	const section_image = document.getElementsByClassName('section-image');
	const container_image = document.getElementsByClassName('image-container__image');
	const container = document.getElementsByClassName('container')[0];

	//handler image container
	for(let i=0;i<section_image.length;i++) {
		container_image[i].style.backgroundImage = 'url("'+section_image[i].src+'")';
	}
	// calls
	menu_toggle.event_listener();
	nav.event_listener();
	leafly.handler();
	contact_form.event_listener();
	pop_up.event_listener();

	// loader complete
	container.classList.add('loader-complete');

	//remove listener
	window.removeEventListener('load', load, false);
}, false);