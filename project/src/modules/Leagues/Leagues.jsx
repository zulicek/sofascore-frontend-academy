import React from "react";
import {LeaguesList} from "../../components/LeaguesList/LeaguesList";

export function Leagues({leagues}) {
    return (
      <>
        <LeaguesList title="Leagues" leagues={leagues} />
      </>
    );
  }