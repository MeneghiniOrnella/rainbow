// mejor manera de hacer lo mismo que 0-rainbow

const getImage = async ()=> {
    try{
        const apiKey = "Z9qtKvTTHqkLiph1YYf0GdaLG2Xn8Qpq";
        const resp = await fetch(
            `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch(error){
        console.error(error)
    }
}
getImage();
