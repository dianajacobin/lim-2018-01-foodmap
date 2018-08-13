const buttonSearch = document.getElementById('button-search');
buttonSearch.addEventListener('click', (e) => {
e.preventDefault();
getListRestaurants();
});

const listRestaurantsPromise = fetch('../data/listRestaurants.json').then((response) => {
  if (response.status === 200){
      return response.json();
  } else {
      throw new ('Ocurrio un error!');
    }
  })

  
const getListRestaurants = () => { 
  let inputSearch = document.getElementById('input-search').value; 
  listRestaurantsPromise.then((jsonRestaurants) => {
    jsonRestaurants.forEach(restaurantObject => {
      printModal(restaurantObject, inputSearch);
    })
  })  
}

