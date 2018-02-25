function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 19,
        center: new google.maps.LatLng(43.786756, -79.1898),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
	
	var markersArray = [];
	
	function clearOverlays() {
		while(markersArray.length) { markersArray.pop().setMap(null); }
	}
	
	var infoWindow = new google.maps.InfoWindow();
	
	var config = {
		apiKey: "AIzaSyCxN5HWSz31H7x0l17fpYeEa7cw5tJVGSo",
		authDomain: "sarhtv2.firebaseapp.com",
		databaseURL: "https://sarhtv2.firebaseio.com/",
		storageBucket: "sarhtv2.appspot.com"
	};
	firebase.initializeApp(config);
	
    
    firebase.database().ref('/people').on('value', function(snapshot) {
        clearOverlays();
		var data = snapshot.val();
        for (var name in data) {
			var marker = new google.maps.Marker({
                position: new google.maps.LatLng(data[name].latitude, data[name].longitude),
                animation: google.maps.Animation.DROP,
                map: map
            });
            markersArray.push(marker);
			
            google.maps.event.addListener(marker, 'click', (function(marker, locationName) {
                return function() {
					var base64 = "data:image/png;base64," + data[locationName].image;
					var image = new Image();
					image.src = base64;
					infoWindow.setContent(image);
					infoWindow.open(map, marker);
                }
            })(marker, name));
        }
    });
}
