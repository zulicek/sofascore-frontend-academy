import React from "react";
import "./SearchForm.scss";
import { Input } from "../Input/Input";

export class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        name: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange = (newName) => {
    this.setState({ name: newName })
  }


  onSubmit = (e) => {
      e.preventDefault();
      this.props.onSearch(this.state.name);
  }

  render() {
    const { value } = this.state.name;

    return (
      <form className="search-form">
        <div className="inner-form">
          <div className="input-wrap">
            <div className="svg-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
              </svg>
            </div>
            <Input
              value={value}
              placeholder="What cocktail you looking for?"
              onChange={this.handleChange}
            />
          </div>
          <div className="btn-wrap">
            <button
              className="btn btn-primary btn-search"
              type="submit"
              onClick={(e) => this.onSubmit(e)}
            >
              SEARCH
            </button>
          </div>
        </div>
        <span className="info">ex. Margarita, Mojito, Cosmopolitan</span>
      </form>
    );
  }
}
