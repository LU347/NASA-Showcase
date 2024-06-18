
const cardContainer = document.getElementById("cardContainer");

function fetchAPI() {
    fetch('https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}')
    .then(response => {
        if (response.ok) {
        return response.json(); 
        } else {
        throw new Error('API request failed');
        }
    })
    .then(data => {
       createCard(data);
    })
    .catch(error => {
        cardContainer.innerHTML = `<h1>${error}</h1>`;
    });
}

function createCard(data) {
    cardContainer.innerHTML = `
    <div class="card">
        <div class="image"><img src="${data.url}" alt="NASA PoD:${data.date} Copyright:${data.copyright}"></div>
        <div class="title"><h1>${data.title}</h1></div>
        <div class="description"><p>${data.explanation}</p></div>
    </div>
    `;
}

fetchAPI();