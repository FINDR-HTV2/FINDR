function writeToFireBase(event) {
	firebase.database().ref('/myoEvents').set({
		event: event,
	});
}

function initMyo(){
	Myo.connect();
	console.log("Initialize Myo Event Handlers");
	
	Myo.on('fingers_spread', function(){
		Myo.setLockingPolicy("none");
		writeToFireBase('fingers');
		console.log('Fingers Spread!');
	});

	Myo.on('fist', function(){
		Myo.setLockingPolicy("none");
		writeToFireBase('fist');
		console.log('Fist!');
	});

	Myo.on('wave_in', function(){
		Myo.setLockingPolicy("none");
		writeToFireBase('waveIn');
		console.log('Wave In!');
	});

	Myo.on('wave_out', function(){
		Myo.setLockingPolicy("none");
		writeToFireBase('waveOut');
		console.log('Wave Out!');
	});

	Myo.on('double_tap', function(){
		Myo.setLockingPolicy("none");
		writeToFireBase('doubleTap');
		console.log('Double Tap!');
	});
}
