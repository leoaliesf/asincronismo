
const apiurl_rdm = 'https://api.thecatapi.com/v1/images/search?limit=5&api_key=live_MRPSSjwlTWVic7awbnhYgrtKp4d4KhNPbgJpvWdKjFsWjaJdVZMhuUXUEzCGlsve';
const apiurl_favourites = 'https://api.thecatapi.com/v1/favourites?api_key=live_MRPSSjwlTWVic7awbnhYgrtKp4d4KhNPbgJpvWdKjFsWjaJdVZMhuUXUEzCGlsve';
const buttonChange = document.getElementById('Btn-img');
const spanError = document.getElementById('error');

const changeImgCat =  async function () {
    const rest = await fetch(apiurl_rdm);
    const data = await  rest.json();
        console.log(data)
        if (rest.status !== 200) {
            spanError.innerHTML = "Hubo un error: " + rest.status ;
          }else{
        const img1 = document.getElementById('img1');
        const img2 = document.getElementById('img2');
        const img3 = document.getElementById('img3');
        const img4 = document.getElementById('img4');
        const img5 = document.getElementById('img5');
        const btnaddfav1 = document.getElementById('addFavorite1');
        const btnaddfav2 = document.getElementById('addFavorite2');
        const btnaddfav3 = document.getElementById('addFavorite3');
        const btnaddfav4 = document.getElementById('addFavorite4');
        const btnaddfav5 = document.getElementById('addFavorite5');
        img1.src = data[0].url;
        img2.src = data[1].url;
        img3.src = data[2].url;
        img4.src = data[3].url;
        img5.src = data[4].url;
        btnaddfav1.onclick=()=>saveFavouriteMichi(data[0].id);
        btnaddfav2.onclick=()=>saveFavouriteMichi(data[1].id);
        btnaddfav3.onclick=()=>saveFavouriteMichi(data[2].id);
        btnaddfav4.onclick=()=>saveFavouriteMichi(data[3].id);
        btnaddfav5.onclick=()=>saveFavouriteMichi(data[4].id);
          }
}
const listFavorites= async function(){
    const rest2 = await fetch(apiurl_favourites);
    const data2 = await rest2.json();
    console.log(data2)
    if (rest2.status !== 200) {
        spanError.innerHTML = "Hubo un error: " + rest2.status + data2.message;
      } else {
        data2.forEach(michi => {
          const section = document.getElementById('favorites')
          const article = document.createElement('article');
          const img = document.createElement('img');
          const btn = document.createElement('button');
          const btnText = document.createTextNode('Sacar al michi de favoritos');
    
          img.src = michi.image.url;
          img.width = 200;
          btn.appendChild(btnText);
          article.appendChild(img);
          article.appendChild(btn);
          section.appendChild(article);
        });
      }

} 

const saveFavouriteMichi = async function(id) {
    const res = await fetch(apiurl_favourites, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        image_id: id
      }),
    });
    const data = await res.json();
  
    console.log('Save')
    console.log(res)
  
    if (res.status !== 200) {
      spanError.innerHTML = "Hubo un error: " + res.status + data.message;
    }
  };

changeImgCat()
listFavorites()
buttonChange.addEventListener('click', changeImgCat)

