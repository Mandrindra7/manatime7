export interface SideBarProps {
  open: boolean;
  handleOpen: () => void;
}

export interface Navigation {
  icon: string;
  label: string;
  children: string[];
}

export interface ManaModule {
  icon: string;
  label: string;
}

export interface Absence {
  user: string;
  category: string;
  period: string;
  actual_solde: number;
  taking_solde: number;
  futur_solde: number;
}
