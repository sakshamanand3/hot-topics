

//getting references to the interactive elements of the page
const tagline = document.querySelectorAll('.tagline');
const container = document.querySelector('.container');
const image = document.querySelectorAll('.image');
const link = document.querySelector('.nav');


//saving the path to initial content into variable:
let url = "content/partial-1.html";


// function that runs when one of the links is clicked
const loadContent = (event) => {


	event.preventDefault();

	let h = event.target.textContent;

	if( h === "Home") {

		let tagline = "home";

		let url = '../content/partial-1.html';

		fetch(url)
		.then(function (rsp) {
			return rsp.text();
		})
		.then(function (data) {
			container.innerHTML = data;
			tagline.innerHTML = tagline;
			document.getElementById('bgimg').style.backgroundImage = "url('./img/p-mast.png')";
		});

		.catch(function(error) { console.log(error.message); });

	} else if (h === "Portfolio") {

		let url = '../content/partial-2.html';
		
		fetch(url)
		.then(function (rsp) {
			return rsp.text();

		}).then(function (data) {
			container.innerHTML = data;
			tagline.innerHTML = tagline;
			document.getElementById('bgimg').style.backgroundImage = "url('./img/mast.png')";
		})


		.catch(function(error) { console.log(error.message); });

	}

}

	const selectContent = () => {

			fetch(url)
		.then(function (rsp) {
			return rsp.text();

		.then(function (data) {
			container.innerHTML = data;
			tagline.innerHTML = tagline;
			document.getElementById('bgimg').style.backgroundImage = "url('./img/mast.png')";

		}) 

		.catch(function(error) { console.log(error.message); 

		});

	}
}



	for (let l of links) {
		1.addEventListener("click", loadContent)
	}


selectContent();




