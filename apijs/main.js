console.log('hello')
const apiurl = 'https://api.thecatapi.com/v1/images/search'

fetch(apiurl)
    .then(res => res.json())
    .then(data => {
        const img = document.querySelector('img')
        img.src = data[0].url;
    })