console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();	
	alert('Submitted successfully!');
}

function catsEvent(evt) {
    alert ('You are awesome!')
}

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

cats.addEventListener('mouseover', catsEvent)

