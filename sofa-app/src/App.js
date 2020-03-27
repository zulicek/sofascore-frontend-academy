import React from "react";
import "./App.scss";
import { IntroBanner } from "./components/IntroBanner/IntroBanner";
import { SearchForm } from "./components/SearchForm/SearchForm";
import axios from "axios";
import { Cocktail } from "./components/Cocktail/Cocktail";

const API = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      cocktails: [],
      isLoading: false,
      error: null
    };

    this.onSearchClick = this.onSearchClick.bind(this);
    this.getCocktails = this.getCocktails.bind(this);
  }

  onSearchClick(newName) {
    this.setState({ name: newName });
    this.getCocktails(newName);
  }

  getCocktails(newName) {
    this.setState({ isLoading: true });
    axios
      .get(API + newName)
      .then(result =>
        this.setState({
          cocktails: result.data.drinks,
          isLoading: false
        })
      )
      .catch(error =>
        this.setState({
          error,
          isLoading: false
        })
      );
  }

  render() {
    return (
      <div className="App">
        <IntroBanner
          backgroundImageUrl="/background-photo.png"
          title="Cocktailand"
          intro="Make your day :)"
        />
        <div className="container">
          <div className="row">
            <div className="col-sm-10 offset-sm-1">
              <SearchForm onSearch={this.onSearchClick} />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <ul>
                {this.state.cocktails.map((cocktail, index) => (
                  <Cocktail
                    key={`${index}+${cocktail.idDrink}`}
                    name={cocktail.strDrink}
                    category={cocktail.strCategory}
                    alchocolic={cocktail.strAlcoholic}
                    glass={cocktail.strGlass}
                    instructions={cocktail.strInstructions}
                    image={cocktail.strDrinkThumb}
                  /> 
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
