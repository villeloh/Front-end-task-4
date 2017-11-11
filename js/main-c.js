"use strict";

const mainUl = document.querySelector('main ul');

showImages(mainUl);

function showImages(element) {
	
	fetch('images.json', { method: 'get' }).then(function(response) {
		
		if(response.ok) {
		  
			return response.json();
		}
		throw new Error('Network response was not ok.');
	  
	}).then(function(myJson) {

		for (let i = 0; i < myJson.length; i++) {
			
			const li = document.createElement('li');
			const figure = document.createElement('figure');
			const figcaption = document.createElement('figcaption');
			const h3 = document.createElement('h3');
			const img = document.createElement('img');
			const a = document.createElement('a');

			img.src = 'img/thumbs/' + myJson[i].mediaThumb;
			a.href = 'img/original/' + myJson[i].mediaUrl;
			h3.innerText = myJson[i].mediaTitle;

			figcaption.appendChild(h3);
			figure.appendChild(figcaption);
			figure.appendChild(a);
			figure.appendChild(img);
			li.appendChild(figure);
			element.appendChild(li);
		} // end for-loop
	
	}).catch(function(error) {

		console.log('There has been a problem with your fetch operation: ' + error.message);
	});
} // end showImages()
