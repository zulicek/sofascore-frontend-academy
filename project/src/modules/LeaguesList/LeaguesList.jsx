import React from "react";
import { Accordion } from "./../../components/Accordion/Accordion";
import "./LeaguesList.scss";

export function LeaguesList({leagues}) {
    return (
      <>
        <h2>List of leagues</h2>
        <ul>
          {leagues.map((league) => 
            <li>
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
      </>
    );
  }