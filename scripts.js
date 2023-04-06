let k = 'vXtEuSYscVBaYAmq8KbBUpxjWb33CziT';
let s = 'blank';

const img = document.querySelector('img');
const search = document.getElementById('input');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    s = search.value; 

    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${k}&s=${s}`, {
        mode: 'cors'
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            img.src = response.data.images.original.url;
        })
        .catch(function(error) {
            img.src = 'error.svg';
        });
}); 

(function init() { 
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${k}&s=${s}`, {
        mode: 'cors'
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            img.src = (response.data.images.original.url);
        })
        .catch(function(error) {
            img.src = 'error.svg';
        });
})();