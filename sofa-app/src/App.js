import React from "react";
import "./App.scss";
import { IntroBanner } from "./components/IntroBanner/IntroBanner";
import { SearchForm } from "./components/SearchForm/SearchForm";
import axios from "axios";
import { Cocktail } from "./components/Cocktail/Cocktail";
import { Pagination } from "./components/Pagination/Pagination";
import { Loader } from "./components/Loader/Loader";
import { NoResults } from "./components/NoResults/NoResults";

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
      perPage: 10,
      showNoResults: false
    };

    this.onSearchClick = this.onSearchClick.bind(this);
    this.getCocktails = this.getCocktails.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  onSearchClick = newName => {
    this.setState({ name: newName });
    this.getCocktails(newName);
  };

  getCocktails = newName => {
    this.setState({
      isLoading: true,
      cocktailsShowing: [],
      showNoResults: true
    });
    axios
      .get(API + newName)
      .then(result =>
        this.setState({
          cocktails: result.data.drinks,
          isLoading: false,
          page: 1,
          cocktailsShowing: result.data.drinks.slice(0, this.state.perPage),
          showNoResults: false,
          totalElements: result.data.drinks.length,
          pageCount: Math.ceil(result.data.drinks.length / this.state.perPage)
        })
      )
      .catch(error =>
        this.setState({
          error,
          isLoading: false
        })
      );
  };

  handlePageClick = newPage => {
    this.setState({
      cocktailsShowing: this.state.cocktails.slice(
        newPage > this.state.page
          ? this.state.page * this.state.perPage
          : (newPage - 1) * this.state.perPage,
        newPage > this.state.page
          ? newPage * this.state.perPage
          : (this.state.page - 1) * this.state.perPage
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
            <div className="col-md-10 offset-md-1">
              <SearchForm onSearch={this.onSearchClick} />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              {this.state.isLoading && <Loader />}
              <ul>
                {this.state.cocktailsShowing.map((cocktail, index) => (
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
              {this.state.showNoResults && !this.state.isLoading && (
                <NoResults />
              )}
              {this.state.cocktails.length > this.state.perPage && (
                <Pagination
                  page={this.state.page}
                  handlePageClick={this.handlePageClick}
                  totalElements={this.state.totalElements}
                  perPage={this.state.perPage}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
