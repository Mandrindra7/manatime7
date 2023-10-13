import planning from "../../public/Module_Planning.svg";
import abscence from "../../public/Module_Absences.svg"
import hour from "../../public/Module_Heures.svg"
import note from "../../public/Module_NotedeFrais.svg"
import presence from "../../public/Module_Présence.svg"
import salary from "../../public/Module_SalaireetPAie.svg"
import interview from "../../public/Module_Entretiens.svg"
import material from "../../public/Module_Matériels.svg"
import document from "../../public/Mdule_Documents.svg"
import rh from "../../public/Module_RH.svg"
import competence from "../../public/Module_Compétences.svg"
import { ManaModule } from "./type";


export const Solde: ManaModule[] = [
  {
    icon: planning,
    label: "Planning",
  },
  {
    icon: abscence,
    label: "Absences",
  },
  {
    icon: hour,
    label: "Heures",
  },
  {
    icon: note,
    label: "Note de Frais",
  },
  {
    icon: presence,
    label: "Présence",
  },
  {
    icon: competence,
    label: "Compétences",
  },
  {
    icon: salary,
    label: "Salaire et paie",
  },
  {
    icon: interview,
    label: "Entretiens",
  },
  {
    icon: material,
    label: "Matériels",
  },
  {
    icon: document,
    label: "Documents",
  },
  {
    icon: rh,
    label: "RH",
  },
];
