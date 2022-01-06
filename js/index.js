import { fetchDataCallback } from "./fetchDataCallback.js";
import { fetchData } from "./fetchData.js";
import { buildCard } from "./cardGenerator.js";
import { clean } from "./clean.js";
import { buildSlider } from "./sliderGenerator.js";


const api = 'https://rickandmortyapi.com/api/character/';

let size= document.getElementById("output");
// console.log(size.innerHTML)
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

function async_hit (size){
  clean();
  (async function fetchDataAsync() {
    const data = await fetchData(idgenerator(size));
  
    data.map(character => {
      const card = buildCard(character);
      cards_container.appendChild(card);
    });
  })();
}

function idgenerator(howmany){
  // console.log("entro")
  var howmany2=document.getElementById("output").innerHTML;
  console.log(howmany2.innerHTML);
  var idlist = []
  for (let index = 0; index < howmany2; index++) {
    idlist.push((Math.round(Math.random()*826)))
  }
  let api_callback = api+idlist
  console.log(api_callback);
  return api_callback
}

function buildfront (){
  fetchData(api)
  .then(data=>{
      const slider = buildSlider(data.info.count);
      slider_container.appendChild(slider);
  })
}
buildfront();