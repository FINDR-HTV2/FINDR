function initMyo(){
	Myo.connect();
	console.log("Initialize Myo Event Handlers");
	Myo.on('fingers_spread', function(){
		Myo.setLockingPolicy("none");
		console.log('Fingers Spread!');
	});

	Myo.on('fist', function(){
		Myo.setLockingPolicy("none");
		console.log('Fist!');
	});

	Myo.on('wave_in', function(){
		Myo.setLockingPolicy("none");
		console.log('Wave In!');
	});

	Myo.on('wave_out', function(){
		Myo.setLockingPolicy("none");
		console.log('Wave Out!');
	});

	Myo.on('double_tap', function(){
		Myo.setLockingPolicy("none");
		console.log('Double Tap!');
	});
}
