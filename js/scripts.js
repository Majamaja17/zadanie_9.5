function drawTree(levels) {
	var star = "";

	for (var j = 0; j < levels; j++) {
		star += '*';
		console.log(star);
	}
}

drawTree(5);
