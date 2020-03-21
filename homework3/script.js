function getPrevPokemons(url, previousButton, nextButton, currentPage) {
  getPokemons(url, previousButton, nextButton);
  currentPage.innerHTML = parseInt(currentPage.innerHTML) - 1;
}


function getNextPokemons(url, previousButton, nextButton, currentPage) {
  getPokemons(url, previousButton, nextButton);
  currentPage.innerHTML = parseInt(currentPage.innerHTML) + 1;
}


function getPokemons(url, previousButton, nextButton) {
  const pokemons = document.getElementById("pokemons");
  const pokemonsList = pokemons.querySelector('.accordion-list');

  pokemonsList.innerHTML = '';
  
  fetch(url)
    .then(response => {
      if (response.status === 200) {
        response.json().then(decodedData => {

          console.log(decodedData)
          //add pokemon accordions
          decodedData.results.forEach(data => {

            
            let listItem = document.createElement("li");
            let el = document.createElement("div");
            el.classList.add("accordion");
            el.innerHTML = 
              `<div class="accordion-item" data-atr>
                <h2 class="title">${data.name}</h2>
                <div class="icon"><i class="fa fa-angle-down" aria-hidden="true"></i></div>
              </div>`

            listItem.append(el);
            
            let deleteButton = document.createElement("button");
            deleteButton.classList.add("delete-button");
            deleteButton.setAttribute("aria-label", "Delete");
            deleteButton.innerHTML = `<i class="fa fa-trash" aria-hidden="true"></i>`;

            deleteButton.addEventListener("click", () => {
              deletePokemon(listItem);
            })

            listItem.append(deleteButton);

            //get pokemon info on click
            listItem.addEventListener("click", () => getPokemonInfo(el,data.url));

            pokemonsList.append(listItem);
          })

          //add previous and next
          previousButton.setAttribute("data-api-route", decodedData.previous)
          if (!decodedData.previous) previousButton.disabled = true;
          else previousButton.disabled = false;

          nextButton.setAttribute("data-api-route", decodedData.next)
          if (!decodedData.next) nextButton.disabled = true;
          else nextButton.disabled = false;
    
        })
      } else {
        console.log('Response status code is not OK!')
      }
    })
    .catch(console.error)

}


function getPokemonInfo(el, url) {

  if (el.classList.contains("opened")) {
    el.classList.remove("opened");

  } else {
    el.classList.add("opened");
    if (!el.querySelector(".accordion-content")) {
      
      fetch(url)
        .then(response => {
          if (response.status === 200) {
            response.json().then(data => {

              //add pokemon info
              let pokemonInfo = document.createElement("div");
              pokemonInfo.classList.add("accordion-content");


              let types = "";
              data.types.forEach(item => {
                types = types + item.type.name + ", ";
              })
              types = types.substring(0, types.length - 2);


              let abilities = "";
              data.abilities.forEach(item => {
                abilities = abilities + item.ability.name + ", ";
              })
              abilities = abilities.substring(0, abilities.length - 2);

              pokemonInfo.innerHTML = 
                `<ul>
                  <li>
                    <h3 class="title">Type:</h3>
                    <span>${types}</span>
                  </li>
                  <li>
                    <h3 class="title">Abilites:</h3>
                    <span>${abilities}</span>
                  </li>
                </ul>
                <div class="image-wrapper">
                  <img src="${data.sprites.front_default}"/>
                </div>`


                el.append(pokemonInfo);
            })

          } else {
            console.log('Response status code is not OK!')
          }
        })
        .catch(console.error)
    }
  }
}

function deletePokemon(listItem) {
  listItem.parentNode.removeChild(listItem);
}




document.addEventListener("DOMContentLoaded", function(){
  const url = 'https://pokeapi.co/api/v2/pokemon';
  const previousButton = document.querySelector('[aria-label="Previous"]');
  const currentPage = document.querySelector('[aria-label="CurrentPage"]');
  const nextButton = document.querySelector('[aria-label="Next"]');

  previousButton.addEventListener("click", () => {
    getPrevPokemons(previousButton.getAttribute("data-api-route"), previousButton, nextButton, currentPage);
  })

  nextButton.addEventListener("click", () => {
    getNextPokemons(nextButton.getAttribute("data-api-route"), previousButton, nextButton, currentPage);
  })



  getPokemons(url, previousButton, nextButton);
});