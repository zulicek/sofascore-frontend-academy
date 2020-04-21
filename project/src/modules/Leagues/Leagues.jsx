import React from "react";
import {LeaguesList} from "../../components/LeaguesList/LeaguesList";

import {leagues} from "../../leagues"

export function Leagues() {
    return (
      <>
        <LeaguesList title="Leagues" leagues={leagues} />
      </>
    );
  }