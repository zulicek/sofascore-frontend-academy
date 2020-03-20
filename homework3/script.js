function getPokemons() {
  const url = 'https://pokeapi.co/api/v2/pokemon'
  const pokemonsList = document.getElementById("pokemons");
  
  fetch(url)
    .then(response => {
      if (response.status === 200) {
        response.json().then(decodedData => {
          decodedData.results.forEach(data => {
            console.log(data)
            //ispiše ime i stavi accordion

            let listItem = document.createElement("li");
            listItem.classList.add("accordion");
            listItem.innerHTML = 
              `<div class="accordion-item">
                <h2 class="title">${data.name}</h2>
                <div class="icon">+</div>
              </div>`
            pokemonsList.append(listItem);
            decodedData.name

            {/* <li class="accordion">
          <div class="accordion-item">
            <h2 class="title">Chartreuse drinking vinegar</h2>
            <div class="icon">+</div>
          </div>
          </li> */}

            fetch(data.url)
            .then(response => {
              if (response.status === 200) {
                response.json().then(decodedData => {
                  
                  //ispiši podatke

                 
                  console.log(decodedData);
                })
              } else {
                console.log('Response status code is not OK!')
              }
            })
            .catch(console.error)


          })
        })
      } else {
        console.log('Response status code is not OK!')
      }
    })
    .catch(console.error)

}
