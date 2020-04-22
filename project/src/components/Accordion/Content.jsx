import React from "react";

export const Content = React.forwardRef(
  ({ height, location, competitors }, ref) => {
    return (
      <div className="accordion-content" ref={ref} style={{ height }}>
        <div className="location-data">
          <h3 className="title">Location info:</h3>
          <p>{location.name}</p>
          <p>{location.address}</p>
          <p>{location.tel}</p>
        </div>
        <div className="competitors-data">
          <h3 className="title">Competitors</h3>
          <ul>
            {competitors.map((competitor) => (
              <li key={competitor.id}>
                {competitor.lastName}, {competitor.name}, {competitor.points}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
);
