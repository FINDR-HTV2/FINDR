function initMap() {
    // var locations = [
    //     ['Bondi Beach', -33.890542, 151.274856, 4],
    //     ['Coogee Beach', -33.923036, 151.259052, 5],
    //     ['Cronulla Beach', -34.028249, 151.157507, 3],
    //     ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
    //     ['Maroubra Beach', -33.950198, 151.259302, 1]
    // ];
    
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: new google.maps.LatLng(-33.92, 151.25),
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
	
    
    firebase.database().ref('/locations').on('value', function(snapshot) {
        clearOverlays();
		var locations = snapshot.val();
        for (var name in locations) {
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[name][0], locations[name][1]),
                animation: google.maps.Animation.DROP,
                map: map
            });
            markersArray.push(marker);
            google.maps.event.addListener(marker, 'click', (function(marker, locationName) {
                return function() {
                    infoWindow.setContent(locationName);
                    infoWindow.open(map, marker);
                }
            })(marker, name));
        }
    });

 
}
