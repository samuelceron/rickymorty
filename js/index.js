import { fetchDataCallback } from "./fetchDataCallback.js";
import { fetchData } from "./fetchData.js";
import { buildCard } from "./cardGenerator.js";
import { clean } from "./clean.js";

const api = 'https://rickandmortyapi.com/api/character/';


document.getElementById("callback").addEventListener("click",function(){callback_hit(10)});
document.getElementById("promises").addEventListener("click",function(){promise_hit(10)});
document.getElementById("asyncawait").addEventListener("click",function(){async_hit(10)});

function callback_hit (size){
  // console.log("entro aqui")
  clean();
  fetchDataCallback (idgenerator(size), (error,data)=>{
  if(error) return console.error;
    console.log(data)
    data.map(character =>{
      const card = buildCard(character);
      cards_container.appendChild(card);
    })
  });
};

function promise_hit (size){
  clean();
  fetchData(idgenerator(size))
  .then(data=>{
    data.map(character=>{
      const card = buildCard(character);
      cards_container.appendChild(card);
    })
  })
}

function idgenerator(howmany){
  // console.log("entro")
  var idlist = []
  for (let index = 0; index < howmany; index++) {
    idlist.push((Math.round(Math.random()*826)))
  }
  let api_callback = api+idlist
  console.log(api_callback);
  return api_callback
}

