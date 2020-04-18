import React from "react";

export const Content = React.forwardRef(({height}, ref) => {
  return (
    <div className="accordion-content" ref={ref} style={{ height: height }}>
        <ul>
            <li>
                <div className="title">Type:</div>
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
})
