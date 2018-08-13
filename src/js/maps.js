const printModal = (restaurantObject,inputSearch) => {
let resultSearch = document.getElementById('result-search');
let titleRestaurant = document.getElementById('nameRestaurant');
let restaurantDescription = document.getElementById('restaurantDescription');
if(restaurantObject.name.toUpperCase() === inputSearch.toUpperCase() ){
   
  resultSearch.innerHTML =`<span> Restaurante: ${restaurantObject.name}  </span><img src="${restaurantObject.img}" width="70px" height='70px'> `;
  nameRestaurant.innerHTML = restaurantObject.name;
  restaurantDescription.innerHTML=` <table class="table table-borderless">
                                  <tr>
                                      <th scope="row"><img src="${restaurantObject.img}"width="70px" height='70px'></th>
                                  </tr>
                                  <tbody>
                                    <tr>
                                      <th scope="row">Descripción: ${restaurantObject.description}</th>
                                    </tr>
                                    <tr>
                                      <th scope="row">Ranking: ${restaurantObject.ranking}</th>
                                    </tr>
                                    <tr>
                                      <th scope="row">Dirección: ${restaurantObject.direction}</th>
                                    </tr>
                                    <tr>
                                      <th scope="row">Telefono: ${restaurantObject.phone}</th>
                                    </tr>
                                  </tbody>
                                </table>`;
  titlePlatos.innerHTML = `Galeria de fotos de ${restaurantObject.name} : `
  imagenPlatos.innerHTML = `
     <img src="${restaurantObject.platos[0]}" class="rounded float-left" alt="...">
      <img src="${restaurantObject.platos[1]}" class="rounded mx-auto d-block" alt="...">
      <img src="${restaurantObject.platos[2]}" class="rounded float-right" alt="..."> 
      <img src="${restaurantObject.platos[3]}" class="rounded float-left" alt="..."> 
  `
  }
}