function initMap() {
	var uluru = {lat: 45.537340, lng: -122.691901};
  
	var map = new google.maps.Map(document.getElementById('map'), {
    	zoom: 16,
		center: uluru
	});
        
	var marker = new google.maps.Marker({
		position: uluru,
		map: map,
		title: 'Vessel'
	});
};