window.onload = function(){
	initColorPicker();
};

function initColorPicker(){
	let colorBox = document.getElementById("color-box");
	let rgb = {
		red: document.getElementById("red"),
		green: document.getElementById("green"),
		blue: document.getElementById("blue")
	};
	let colorPickers = document.getElementsByClassName("picker");
	setColorPickerEventListeners(colorBox, rgb, colorPickers);
}

function setColorPickerEventListeners(colorBox, rgb, colorPickers){
	let pickerLength = colorPickers.length;
	for (i = 0; i < pickerLength; i++) {
		colorPickers[i].addEventListener("change", function() {
			let red = rgb.red.value;
			let green = rgb.green.value;
			let blue = rgb.blue.value;
			setColorBoxBG(colorBox, red, green, blue);
			setDisplayValues(red, green, blue);
		});
	}
}

function setColorBoxBG(colorBox, red, green, blue) {
	let rgbValues = [red, green, blue].join(",");
	colorBox.style.backgroundColor = "rgb(" + rgbValues + ")";
}

function setDisplayValues(red, green, blue) {
	let redValue = document.getElementById("red-value");
	let greenValue = document.getElementById("green-value");
	let blueValue = document.getElementById("blue-value");
	redValue.innerText = red;
	greenValue.innerText = green;
	blueValue.innerText = blue;
}