function displayResults(responseJson){
    console.log(responseJson.message);
}
function getImage() {
    fetch('https://dog.ceo/api/breeds/image/random/3')
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson))
        .catch(error => alert('Something went wrong. Try again later'));
}





function handleSubmit() {
    $('form').submit(event => {
        event.preventDefault();
        getImage();
    })
};




function loadApp() {
    console.log('App is loaded and ready');
    handleSubmit();
}

$(loadApp());