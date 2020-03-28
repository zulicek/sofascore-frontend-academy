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
      error: null,
      cocktailsShowing: [],
      totalElements: 0,
      page: 12,
      perPage: 10
    };

    this.onSearchClick = this.onSearchClick.bind(this);
    this.getCocktails = this.getCocktails.bind(this);
  }

  onSearchClick = newName => {
    this.setState({ name: newName });
    this.getCocktails(newName);
  }

  getCocktails = newName => {
    this.setState({ isLoading: true });
    axios
      .get(API + newName)
      .then(result =>
        this.setState({
          cocktails: result.data.drinks,
          isLoading: false,
          page: 1,
          totalElements: result.data.drinks.length,
          pageCount: Math.ceil(result.data.drinks.length / this.state.perPage),
          cocktailsShowing: result.data.drinks.slice(0, this.state.perPage)
        })
      )
      .catch(error =>
        this.setState({
          error,
          isLoading: false
        })
      );
  }

  handlePageClick = newPage => {
    this.setState({
      cocktailsShowing: this.state.cocktails.slice(
        newPage >  this.state.page ? this.state.page * this.state.perPage : (newPage-1) * this.state.perPage,
        newPage >  this.state.page ? newPage * this.state.perPage : (this.state.page-1) * this.state.perPage
      ),
      page: newPage
    });
  };

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
                {this.state.cocktailsShowing.map((cocktail, index) => (
                  /* console.log(this.state) */
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
              {this.state.cocktails.length != 0 && (
                <div className="pagination">
                  <button
                    onClick={this.handlePageClick.bind(
                      this,
                      this.state.page - 1
                    )}
                    disabled={this.state.page <= 1}
                    className="page-item"
                  >
                    <span aria-hidden="true">«</span>
                    <span className="sr-only">Previous</span>
                  </button>
                  <span className="page-item">
                    {this.state.page} /{" "}
                    {Math.ceil(this.state.totalElements / this.state.perPage)}
                  </span>
                  <button
                    onClick={this.handlePageClick.bind(
                      this,
                      this.state.page + 1
                    )}
                    disabled={
                      this.state.page >=
                      Math.ceil(this.state.totalElements / this.state.perPage)
                    }
                    className="page-item"
                  >
                    <span aria-hidden="true">»</span>
                    <span className="sr-only">Next</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
