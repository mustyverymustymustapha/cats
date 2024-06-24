const catImage = document.getElementById('cat-image');
const catAPIUrl = 'https://api.thecatapi.com/v1/images/search';

async function fetchRandomCat() {
    try {
        const response = await fetch(catAPIUrl);
        const data = await response.json();
        const imageUrl = data[0].url;
        catImage.src = imageUrl;
    } catch (error) {
        console.error('Error fetching cat image:', error);
    }
}

// Fetch a random cat image when the page loads
fetchRandomCat();

// Refresh the cat image on button click (optional)
catImage.addEventListener('click', fetchRandomCat);



