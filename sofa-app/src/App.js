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

    this.wasFetched = false;

    this.state = {
      cocktails: [],
      isLoading: false,
      error: null,
      cocktailsShowing: [],
      page: 1
    };

    this.onSearchClick = this.onSearchClick.bind(this);
    this.getCocktails = this.getCocktails.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  onSearchClick = newName => {
    this.getCocktails(newName);
  };

  getCocktails = newName => {
    this.setState({
      isLoading: true
    });

    fetch(API + newName)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then(data => {
        this.wasFetched = true;
        this.setState({
          cocktails: data.drinks,
          isLoading: false,
          page: 1
        });
      })
      .catch(error => {
        this.setState({
          error,
          isLoading: false
        });
      });
  };

  handlePageClick = newPage => {
    this.setState({
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
        <SearchForm onSearch={this.onSearchClick} />
        {this.state.isLoading && <Loader />}
        {this.state.error ? (
          <NoResults text="Something is wrong with you request, try again" />
        ) : (
          <>
            <ul className="cocktails-list">
              {this.state.cocktails &&
                this.state.cocktails
                  .slice(
                    (this.state.page - 1) * this.props.perPage,
                    this.state.page * this.props.perPage
                  )
                  .map(cocktail => (
                    <Cocktail
                      key={cocktail.idDrink}
                      name={cocktail.strDrink}
                      category={cocktail.strCategory}
                      alchocolic={cocktail.strAlcoholic}
                      glass={cocktail.strGlass}
                      instructions={cocktail.strInstructions}
                      image={cocktail.strDrinkThumb}
                    />
                  ))}
            </ul>

            {this.wasFetched && !this.state.isLoading && (
              <NoResults text=" No results containing your search term were found." />
            )}
            {this.state.cocktails &&
              this.state.cocktails.length > this.props.perPage && (
                <Pagination
                  page={this.state.page}
                  handlePageClick={this.handlePageClick}
                  totalElements={this.state.cocktails.length}
                  perPage={this.props.perPage}
                />
              )}
          </>
        )}
      </div>
    );
  }
}

export default App;
