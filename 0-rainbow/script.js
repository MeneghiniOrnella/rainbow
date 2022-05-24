const apiKey = 'Z9qtKvTTHqkLiph1YYf0GdaLG2Xn8Qpq';
// https://developers.giphy.com/docs/api/endpoint#random
// https://api.giphy.com/v1/gifs/random?api_key=Z9qtKvTTHqkLiph1YYf0GdaLG2Xn8Qpq
const peticion = fetch('https://api.giphy.com/v1/gifs/random?api_key=${apiKey}');
/* peticion.then(respuesta => {
    console.log(respuesta)
}) */
peticion.then(respuesta => {
    respuesta.json().then(data => {
        console.log(data)
    })
})
.catch(console.warn);
