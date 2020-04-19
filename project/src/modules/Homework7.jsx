import React from "react";
import { LeaguesList } from "./../modules/LeaguesList/LeaguesList";

const data = [
  {
    name: "Proljetna liga",
    type: "single",
    startDate: "11.4.2020",
    location: {
      name: "Teniski klub Koprivnica",
      address: "Ul. Mihovila Pavleka Miškine 12, 48000, Koprivnica",
      tel: "048 622 262",
    },
    surface: "clay",
    competitors: [
      {
        name: "Ivan",
        lastName: "Horvat",
        points: "5",
      },
      {
        name: "Filip",
        lastName: "Ivančić",
        points: "3",
      },
    ],
  },
  {
    name: "Proljetna liga",
    type: "double",
    startDate: "1.5.2020",
    location: {
      name: "Teniski klub Koprivnica",
      address: "Ul. Mihovila Pavleka Miškine 12, 48000, Koprivnica",
      tel: "048 622 262",
    },
    surface: "clay",
    competitors: [
      {
        name: "Ivan",
        lastName: "Horvat",
        points: "0",
      },
      {
        name: "Filip",
        lastName: "Ivančić",
        points: "0",
      },
    ],
  },
  {
    name: "Liga mladosti",
    type: "double",
    startDate: "9.5.2020",
    location: {
      name: "Teniski klub Mladost",
      address: "Jarunska ul. 5, 10000, Zagreb",
      tel: "01 3647 596",
    },
    surface: "clay",
    competitors: [
      {
        name: "Ivan",
        lastName: "Horvat",
        points: "0",
      },
      {
        name: "Filip",
        lastName: "Ivančić",
        points: "0",
      },
    ],
  },
  {
    name: "Moja liga",
    type: "single",
    startDate: "6.6.2020",
    location: {
      name: "Teniski klub Mladost",
      address: "Jarunska ul. 5, 10000, Zagreb",
      tel: "01 3647 596",
    },
    surface: "grass",
    competitors: [
      {
        name: "Ivan",
        lastName: "Horvat",
        points: "0",
      },
      {
        name: "Filip",
        lastName: "Ivančić",
        points: "0",
      },
    ],
  },
  {
    name: "Maksimira",
    type: "single",
    startDate: "6.6.2020",
    location: {
      name: "Teniski klub Maksimir",
      address: "Ul. Ravnice V 10, 10000, Zagreb",
      tel: "091 935 6634",
    },
    surface: "grass",
    competitors: [
      {
        name: "Ivan",
        lastName: "Horvat",
        points: "0"
      },
      {
        name: "Filip",
        lastName: "Ivančić",
        points: "0"
      },
    ],
  },
];

export function Homework7() {
  const leagues = data;

  return (
    <LeaguesList leagues={data}/>
  );
}
