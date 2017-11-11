"use strict";

const mainUl = document.querySelector('main ul');

showImages(mainUl);

function showImages(element) {

	let result = "";
	
	fetch('images.json', { method: 'get' }).then(function(response) {
		
		if(response.ok) {
		  
			return response.json();
		}
		throw new Error('Network response was not ok.');
	  
	}).then(function(myJson) {

		for (let i = 0; i < myJson.length; i++) {

			result += '<li><figure><a href="img/original/' + myJson[i].mediaUrl + '"><img src="img/thumbs/' + myJson[i].mediaThumb + '"><figcaption><h3>' + myJson[i].mediaTitle + '</h3></figcaption></figure></li>';
		}

		element.innerHTML = result;
	
	}).catch(function(error) {

		console.log('There has been a problem with your fetch operation: ' + error.message);
	});
} // end showImages()
