
const apiKey = process.env.API_KEY;

const cardContainer = document.getElementById("cardContainer");

function fetchAPI() {
    fetch('https://api.nasa.gov/planetary/apod?api_key=${apiKey}')
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
        //Default Card
        cardContainer.innerHTML = `
        <div class="home-grid">
            <div class="container">
                <img src="./assets/images/nasa-Yj1M5riCKk4-unsplash.jpg" alt="Placeholder" height="auto" width="400px" style="border-radius: 10px">
            </div>
            <div class="card-grid">
                <h1>First Untethered Spacewalk</h1>
                <h3><em>Feb. 7, 1984</em></h3>
                <p>For 50 years, NASA has been "suiting up" for spacewalking. In this Feb. 7, 1984 photograph of the first untethered spacewalk, NASA astronaut Bruce McCandless is in the midst of the first "field" tryout of a nitrogen-propelled backpack device called the Manned Maneuvering Unit (MMU).</p>
                <p><em>Credit: <a href="https://www.nasa.gov/image-article/nasa-celebrates-50-years-of-spacewalking/" style="color: white" target="_blank" rel="noopener noreferrer">NASA</a></em></p>
                <p class="error"><strong>${error}</strong></p>
            </div>
        </div>
        `;
        
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