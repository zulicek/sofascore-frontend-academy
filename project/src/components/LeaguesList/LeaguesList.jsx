import React from "react";
import { Accordion } from "../Accordion/Accordion";
import "./LeaguesList.scss";

export function LeaguesList({title, leagues}) {
    return (
      <>
        <h2>{title}</h2>
        {leagues && 
          <ul>
            {leagues.map((league) => 
              <li key={league.id}>
                <Accordion
                  name={league.name}
                  type={league.type}
                  startDate={league.startDate}
                  location={league.location}
                  surface={league.surface}
                  competitors={league.competitors}
                />
              </li>
            )}
          </ul>
        }
      </>
    );
  }