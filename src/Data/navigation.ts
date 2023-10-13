 import space from "../../public/Mon espace.svg"
 import validation from "../../public/Validation.svg"
 import indicator from "../../public/Indicateurs.svg"
 import solde from "../../public/Soldes.svg"
 import search from "../../public/Recherche.svg"
import { Navigation } from "./type"
 
 export const sideNav: Navigation[] = [
    {
        icon : space,
        label: "Mon espace",
        children: []
    },
    {
        icon : validation,
        label: "Validation",
        children: []
    },
    {
        icon : indicator,
        label: "Indicateurs",
        children: []
    },
    {
        icon : solde,
        label: "Soldes",
        children: ["Gestion des soldes","Ajuster un solde", "Compteurs", "Historique"]
    },
    {
        icon : search,
        label: "Recherche",
        children: []
    },
 ]