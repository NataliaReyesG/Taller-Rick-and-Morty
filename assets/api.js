/*un personaje*/
function personaje(){
  const buscar = document.getElementById("buscar").value
  fetch(`https://rickandmortyapi.com/api/character/${buscar}`)
  .then (res => res.json())
  .then (data => letras(data))

  
}

function letras(data){
  const cardperson1 = document.getElementById("cardperson1");
  let card =  `<div class="card" style="width: 18rem; ">
  <img src="${data.image}" class="card-img-top " alt="...">
  <div class="card-body">
  <h4>personaje numero: ${data.id}</h4>
    <h4>${data.name}</h4>
  </div>
</div>`

cardperson1.innerHTML=card
}
/*varios personajes*/
function varios(){
  const buscar = document.getElementById("buscar").value
  for (let i = 1 ; i > buscar.length ; i++);{
   fetch(`https://rickandmortyapi.com/api/character/${i}`)
  .then (res => res.json())
  .then (data => bichos(data))
}

  function bichos(data){
    const cardperson1 = document.getElementById("cardperson1");
    let card =  `<div class="card" style="width: 18rem;">
    <img src="${data.image}" class="card-img-top" alt="...">
    <div class="card-body">
    <h4>personaje numero: ${data.id}</h4>
      <h4>${data.name}</h4>
    </div>
  </div>`
  
  cardperson1.innerHTML=card

   
  } 
   
}

/*borrar*/
function recargarURL(){
  location.reload();
}








