import React from "react";
import "./Cocktail.scss";

export class Cocktail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            opened: false
        };
    }

    toggleAccordion = () => {
        this.setState({ opened: !this.state.opened})
    }
    
  render() {
    const {
      name,
      category,
      alchocolic,
      glass,
      instructions,
      image
    } = this.props;

    return (
      <li onClick={this.toggleAccordion.bind(this)}>
        <div className={`accordion${this.state.opened ? " opened" : ""}`}>
            <div className="accordion-item">
                <div
                    className="image-wrapper"
                    style={{ backgroundImage: `url(${image})` }}
                    ></div>
                <h2 className="title">{name}</h2>
                <div className="icon">
                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                </div>
            </div>
            <div className="accordion-content">
                <p>{category}</p>
                <p>{alchocolic}</p>
                <p>{glass}</p>
                <p>{instructions}</p>
            </div>
        </div>
      </li>
    );
  }
}
