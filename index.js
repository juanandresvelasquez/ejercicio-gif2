let APIKEY = "OGnYx3LEE9uG4paQkgd0cDVz2Oa0uqY4";
document.addEventListener("DOMContentLoaded", init);

function init(){
    document.getElementById("yes").addEventListener("click", ev => {
        ev.preventDefault();
        let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=`;
        let str = document.getElementById("juan").value.trim();
        url = url.concat(str);
        fetch(url)
            .then(response => response.json())
            .then(content => {
                //console.log(content.data);
                //console.log("Meta", content.meta);
                let img= document.createElement('img');
                //let fc = document.createElement('soccer');
                img.src = content.data[0].images.original.url;
                img.alt = content.data[0].title;
                // fc.textContent = content.data[0].title;
                //figura.appendChild(img);
                //figura.appendChild(fc);

                let claro = document.querySelector('.claro');
                claro.insertAdjacentElement('afterbegin', img);
            })
    });
}