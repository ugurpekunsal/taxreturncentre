"use strict";

window.onload = delay(1000).then(() => removeWatermark());
function delay(time) {
	return new Promise((resolve) => setTimeout(resolve, time));
}

function removeWatermark() {
	document
		.getElementsByClassName("form")[0]
		.getElementsByTagName("a")[0]
		.remove();
}
