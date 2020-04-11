import React from "react";

export function Content() {
  return (
    <div className="accordion-content">
        <ul>
            <li>
                <div claclassNamess="title">Type:</div>
                <div>poison, grass</div>
            </li>
            <li>
                <div className="title">Abilites:</div>
                <div>chlorophyll, overgrow</div>
            </li>
        </ul>
        <div className="image-wrapper">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" />
        </div>
    </div>
  );
}
