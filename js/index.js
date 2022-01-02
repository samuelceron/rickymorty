import { fetchDataCallback } from "./fetchDataCallback.js";
import { buildCard } from "./cardGenerator.js";

const api = 'https://rickandmortyapi.com/api/character/1,183';

//Callback
fetchDataCallback(api, (error,data)=>{
  if(error) return console.error;
  console.log(data)
  data.map(character =>{
    const card = buildCard(character);
    cards_container.appendChild(card);
  })
});



// // primero buscamos la lista de personajes
// fetchData(api, (error1, data1) => {
//   // si error, matamos retornando un error
//   var ids = [0,0,2,4]
//   ids.forEach(element => {
//     console.log(element)
//     if(error1) return console.error(error1);
//     // luego buscamos en la api el id de Rick
//     fetchData(api + data1.results[element].id, (error2, data2) => {
//       // si error, matamos retornando un error
//       if(error2) return console.error(error2);
//       // por ultimo la consulta a la api que contiene su dimension
//       fetchData(data2.origin.url, (error3, data3) => {
//         // si error, matamos retornando un error
//         if(error3) return console.error(error3);
        
//         // mostramos los resultados :) 
//         console.log(data1.info.count);
//         console.log(data2.name);
//         console.log(data3.dimension);
        
//         // rutas de las peticiones en orden
//         console.log(api);
//         console.log(api + data1.results[0].id); 
//         console.log(data2.origin.url); 
      
//       });
//     });
    
//   });
// });

function idgenerator(howmany){
  var idlist = []
  for (let index = 0; index < howmany; index++) {
    // console.log((Math.round(Math.random()*826)))
    // console.log(howmany)
    idlist.push((Math.round(Math.random()*826)))
  }
  // console.log(idlist)
}

idgenerator(10);