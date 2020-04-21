import React from "react";
import {LeaguesList} from "../../components/LeaguesList/LeaguesList";
import {leagues} from "../../leagues"

export function UserLeagues() {
    return (
      <>
        <LeaguesList title="My leagues" leagues={leagues} />
      </>
    );
  }