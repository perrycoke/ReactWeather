function addPromise (a, b) {
	return new Promise(function (resolve, reject) {
		if (typeof a === 'number' && typeof b === 'number') {
			resolve(a + b);
		} else {
			reject('Not a number');
		}
	});
}

addPromise(7, 3).then(function (res) {
	console.log(res);
}, function(err) {
	console.log(err);	
});

addPromise(7).then(function (res) {
	console.log(res);
}, function(err) {
	console.log(err);	
});