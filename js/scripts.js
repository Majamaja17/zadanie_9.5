window.onload = function() {

	var withButtonItems = document.getElementsByClassName('button');
	console.log(withButtonItems);

	var ButtonItemsLength = withButtonItems.length;
	console.log(ButtonItemsLength);

	for (var j = 0; j < ButtonItemsLength; j++) {

		var lastButton = document.getElementById('last_button');
		var newParagraph = document.createElement('p');

		newParagraph.innerText = withButtonItems;

		lastButton.appendChild(newParagraph);
		console.log(withButtonItems); 
	}
}

