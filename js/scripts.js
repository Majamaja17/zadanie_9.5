window.onload = function() {

	var withButtonItems = document.getElementsByClassName("button");
	console.log(withButtonItems);

	var buttonItemsLength = withButtonItems.length;
	console.log(buttonItemsLength);

	for (var i = 0; i < buttonItemsLength; i++) {

		var lastButton = document.getElementById("div");
		var newParagraph = document.createElement("p");

		newParagraph.innerText = withButtonItems[i].innerText;

		lastButton.appendChild(newParagraph);
		console.log(withButtonItems); 
	}
};
