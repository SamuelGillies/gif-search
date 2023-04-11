let k = 'vXtEuSYscVBaYAmq8KbBUpxjWb33CziT';
let s = 'blank';

const img = document.querySelector('img');
const search = document.getElementById('input');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    s = search.value; 
    getGif();
}); 

async function getGif() {
    try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${k}&s=${s}`, {mode: 'cors'}); 
        const gifData = await response.json(); 
        img.src = gifData.data.images.original.url;
    } catch (error) {
        img.src = 'error.svg';
        console.log(error); 
    }
}

(function init() { 
    getGif();
})();