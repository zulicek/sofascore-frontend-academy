const Pokemons = function() {
  const url = "https://pokeapi.co/api/v2/pokemon";
  const pokemons = document.getElementById("pokemons");
  const pokemonsList = pokemons.querySelector(".accordion-list");
  const previousButton = document.querySelector('[aria-label="Previous"]');
  const currentPage = document.querySelector('[aria-label="CurrentPage"]');
  const nextButton = document.querySelector('[aria-label="Next"]');
  const returnButton = document.getElementById("return-deleted");
  let deleted = [];

  function getPokemons(url) {
    pokemonsList.innerHTML = "";

    getData(url).then(decodedData => {
      decodedData.results.forEach(data => {
        render(
          pokemonsList,
          `<li data-name=${data.name}>
            <div class="accordion">
              <div class="accordion-item">
                <h2 class="title">${data.name}</h2>
                <div class="icon">
                  <i class="fa fa-angle-down" aria-hidden="true"></i>
                </div>
              </div>
            </div>
            <button class="delete-button" aria-label="Delete">
              <i class="fa fa-trash" aria-hidden="true"></i>
            </button>
          </li>`
        );

        let listItem = pokemonsList.querySelector(`[data-name="${data.name}"]`);

        listItem
          .querySelector(".accordion-item")
          .addEventListener("click", () =>
            getPokemonInfo(listItem.querySelector(".accordion"), data.url)
          );

        listItem
          .querySelector(".delete-button")
          .addEventListener("click", () => {
            deletePokemon(listItem);
            deleted.push(listItem);
            pokemons.classList.add("has-deleted");
          });
      });

      //add previous and next
      previousButton.setAttribute("data-api-route", decodedData.previous);
      if (!decodedData.previous) previousButton.disabled = true;
      else previousButton.disabled = false;

      nextButton.setAttribute("data-api-route", decodedData.next);
      if (!decodedData.next) nextButton.disabled = true;
      else nextButton.disabled = false;
    });
  }

  function getPrevPokemons(url) {
    getPokemons(url);
    currentPage.innerHTML = parseInt(currentPage.innerHTML) - 1;
  }

  function getNextPokemons(url) {
    getPokemons(url);
    currentPage.innerHTML = parseInt(currentPage.innerHTML) + 1;
  }

  function getPokemonInfo(el, url) {
    if (!el.classList.contains("opened")) {
      if (!el.querySelector(".accordion-content")) {
        getData(url).then(data => {
          const types = data.types.map(t => t.type.name).join(", ");
          const abilities = data.abilities.map(t => t.ability.name).join(", ");

          render(
            el,
            `<div class="accordion-content">
            <ul>
              <li>
                <div class="title">Type:</div>
                <div>${types}</div>
              </li>
              <li>
                <div class="title">Abilites:</div>
                <div>${abilities}</div>
              </li>
            </ul>
            <div class="image-wrapper">
              <img src="${data.sprites.front_default}"/>
            </div>
          </div>`
          );
        });
      }
    }

    el.classList.toggle("opened");
  }

  function deletePokemon(listItem) {
    listItem.parentNode.removeChild(listItem);
  }

  previousButton.addEventListener("click", () => {
    getPrevPokemons(previousButton.getAttribute("data-api-route"));
  });

  nextButton.addEventListener("click", () => {
    getNextPokemons(nextButton.getAttribute("data-api-route"));
  });

  returnButton.addEventListener("click", () => {
    deleted.forEach(item => render(pokemonsList, item.outerHTML));
    deleted = [];
    pokemons.classList.remove("has-deleted");
  });

  getPokemons(url, previousButton, nextButton, deleted);
};

document.addEventListener("DOMContentLoaded", function() {
  Pokemons();
});
