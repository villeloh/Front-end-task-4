// Create function 'showImages' which
// adds the loaded HTML content to <ul> element

const mainUl = document.querySelector('main ul');

showImages(mainUl);

function showImages(element) {
	
	fetch('images.html', { method: 'get' }).then(function(response) {
		
		if(response.ok) {
		  
			return response.text();
		}
		throw new Error('Network response was not ok.');
	  
	}).then(function(myText) { 

		element.innerHTML = myText;
	
	}).catch(function(error) {
		console.log('There has been a problem with your fetch operation: ' + error.message);
	});
} // end showImages()
