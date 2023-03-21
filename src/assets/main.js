const options = {
	method: 'GET',
	headers: {
		'X-CACHEBYPASS': '@bluuweb',
		'X-RapidAPI-Key': 'dddb0bfd00msh2566c672f67cce0p14b819jsnb13b8a22dfa5',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

fetch('https://youtube-v31.p.rapidapi.com/captions?part=snippet&videoId=M7FIvfx5J10', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));