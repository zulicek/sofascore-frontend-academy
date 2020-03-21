function getPokemons() {
  const url = 'https://pokeapi.co/api/v2/pokemon'
  const pokemonsList = document.getElementById("pokemons");
  
  fetch(url)
    .then(response => {
      if (response.status === 200) {
        response.json().then(decodedData => {
          decodedData.results.forEach(data => {

            //add pokemon accordion
            let listItem = document.createElement("li");
            listItem.classList.add("accordion");
            listItem.innerHTML = 
              `<div class="accordion-item" data-atr>
                <h2 class="title">${data.name}</h2>
                <div class="icon">+</div>
              </div>`

            //get pokemon info on click
            listItem.addEventListener("click", () => getPokemonInfo(listItem,data.url));

            pokemonsList.append(listItem);
          })
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