import React from "react";

export class Cocktail extends React.Component {
  render() {
    const { name, category, alchocolic, glass, instructions, image } = this.props;

    return <li>
        <p>{ name }</p>
        <p>{ category }</p>
        <p>{ alchocolic }</p>
        <p>{ glass }</p>
        <p>{ instructions }</p>
        <img src={ image }/>
    </li>;
  }
}
