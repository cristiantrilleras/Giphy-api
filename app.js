const url = "https://api.giphy.com/v1/gifs/search"
let busqueda= "?q="
const key = "&api_key=a8wxzWYQaq2N3hqOyrOSTV3QuZ6ixdxb"
const limite ="&limit=40"
const urltrending='https://api.giphy.com/v1/gifs/trending?api_key=a8wxzWYQaq2N3hqOyrOSTV3QuZ6ixdxb&limit=4'
let q= ""

let urlcompleta=""


const btn= document.getElementById("btn")

btn.onclick = () =>{
    document.getElementById("portafolio").innerHTML=""
    q= document.getElementById("busqueda").value
    urlcompleta= url + busqueda + q + key + limite
    getData()
}

const getData = async () => {
    // Obtener GIFs destacados (solicitud separada)
    document.getElementById("destacados").innerHTML = "";
    const urlDestacados = urltrending 

    await fetch(urlDestacados)
        .then((response) => {
            return response.json();
        })
        .then((giphy) => {
            console.log(giphy);

            for (let i = 0; i < giphy.data.length; i++) {
                const gif = document.createElement("img");
                gif.src = giphy.data[i].images["original"].url;
                gif.className = "mb-3";
                document.getElementById("destacados").appendChild(gif);
            }
        });
    
    // Obtener GIFs de búsqueda
    document.getElementById("portafolio").innerHTML = "";

    q = document.getElementById("busqueda").value;
    urlcompleta = url + busqueda + q + key + limite;

    fetch(urlcompleta)
        .then((response) => {
            return response.json();
        })
        .then((giphy) => {
            console.log(giphy);

            for (let i = 0; i < giphy.data.length; i++) {
                const gif = document.createElement("img");
                gif.src = giphy.data[i].images["original"].url;
                gif.className = "mb-3";
                document.getElementById("portafolio").appendChild(gif);
            }
        });
};

getData()

