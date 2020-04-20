import React from "react";
import {LeaguesList} from "../../components/LeaguesList/LeaguesList";

export function UserLeagues({leagues}) {
    return (
      <>
        <LeaguesList title="My leagues" leagues={leagues} />
      </>
    );
  }