import { Absence } from "./type";

export const rowHead: string[] = [
  "Utilisateurs",
  "Catégorie",
  "Période",
  "Solde actuel",
  "Solde pris",
  "Solde futur",
  "action",
];

export const users = ["Darlene Menson", "Marlon BRANDON", "Monkey D. Luffy"];

export const abscenceData: Absence[] = [
  {
    user: "Darlene Menson 1",
    category: "Congés payés",
    period: "2020-2021",
    actual_solde: 16,
    taking_solde: 10,
    futur_solde: 34,
  },
  {
    user: "Marlon BRANDON 2",
    category: "RTT",
    period: "2020-2021",
    actual_solde: 3,
    taking_solde: 25,
    futur_solde: 20,
  },
  {
    user: "Darlene Menson 3",
    category: "Congés payés",
    period: "2020-2021",
    actual_solde: 16,
    taking_solde: 10,
    futur_solde: 34,
  },
  {
    user: "Marlon BRANDON 4",
    category: "RTT",
    period: "2020-2021",
    actual_solde: 3,
    taking_solde: 25,
    futur_solde: 20,
  },
  {
    user: "Darlene Menson 5",
    category: "Congés payés",
    period: "2020-2021",
    actual_solde: 16,
    taking_solde: 10,
    futur_solde: 34,
  },
  {
    user: "Marlon BRANDON 6",
    category: "RTT",
    period: "2020-2021",
    actual_solde: 3,
    taking_solde: 25,
    futur_solde: 20,
  },
  {
    user: "Darlene Menson 7",
    category: "Congés payés",
    period: "2020-2021",
    actual_solde: 16,
    taking_solde: 10,
    futur_solde: 34,
  },
  {
    user: "Marlon BRANDON 8",
    category: "RTT",
    period: "2020-2021",
    actual_solde: 3,
    taking_solde: 25,
    futur_solde: 20,
  },
  {
    user: "Darlene Menson 9",
    category: "Congés payés",
    period: "2020-2021",
    actual_solde: 16,
    taking_solde: 10,
    futur_solde: 34,
  },
  {
    user: "Marlon BRANDON 10",
    category: "RTT",
    period: "2020-2021",
    actual_solde: 3,
    taking_solde: 25,
    futur_solde: 20,
  },
];

export const addAbsence = (data: Absence) => {
  abscenceData.push(data);
};

export const deleteAbsence = (abscence: Absence) => {
  const index = abscenceData.findIndex((item) => item.user === abscence.user);
  abscenceData.splice(index, 1);
 return abscenceData
};
