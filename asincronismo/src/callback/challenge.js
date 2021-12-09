
//se instalo desde la terminal en la carpeta callback
// npm install xmlhttprequest --save

//xml se usa por la manera en la que se trabajaba antes cuando solo estaban los callbacks
let xmlhttprequest = require('xmlhttprequest').XMLHttpRequest;

function fetchData(url_api, callback){
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', url_api, true);
    xhttp.onreadystatechange = function(event){
        if(xhttp.readyState === 4){
            if(xhttp.status === 200){
                callback(null, JSON.parse(xhttp.responseText));
            }else{
                const error = new Error('error: '+ url_api);
                return callback(error, null);
            }
        }
    }
    xhttp.send();
}