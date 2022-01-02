import { fetchDataCallback } from "./fetchDataCallback.js";
import { buildCard } from "./cardGenerator.js";
import { clean } from "./clean.js";

const api = 'https://rickandmortyapi.com/api/character/';



document.getElementById("callback").addEventListener("click",abd);

function abd (){
  clean();
  fetchDataCallback (idgenerator(10), (error,data)=>{
  if(error) return console.error;
    console.log(data)
    data.map(character =>{
      const card = buildCard(character);
      cards_container.appendChild(card);
    })
  });
}



function idgenerator(howmany){
  // console.log("entro")
  var idlist = []
  for (let index = 0; index < howmany; index++) {
    // console.log((Math.round(Math.random()*826)))
    // console.log(howmany)
    idlist.push((Math.round(Math.random()*826)))
  }
  let api_callback = api+idlist
  console.log(api_callback);
  return api_callback
}

