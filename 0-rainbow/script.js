const apiKey = "Z9qtKvTTHqkLiph1YYf0GdaLG2Xn8Qpq";
// https://developers.giphy.com/docs/api/endpoint#random
// https://api.giphy.com/v1/gifs/random?api_key=Z9qtKvTTHqkLiph1YYf0GdaLG2Xn8Qpq
const peticion = fetch(
	`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;
);
/* peticion.then(respuesta => {
    console.log(respuesta)
}) */
/* no se ve prolijo:
peticion.then(respuesta => {
    respuesta.json().then(data => {
        console.log(data)
    })
}) 
.catch(console.warn);*/

/* peticion
	.then((respuesta) => respuesta.json())
	.then(({ data }) => {
		console.log(data.images.original.url);
	})
	.catch(console.warn); */

peticion
	.then((respuesta) => respuesta.json())
	.then(({ data }) => {
		const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
	})
	.catch(console.warn);    
