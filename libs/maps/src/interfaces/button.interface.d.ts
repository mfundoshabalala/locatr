export interface ButtonConfig {
  label: string;
  icon: string;
  disabled?: boolean;
}

export interface ButtonInterface extends ButtonConfig {
  clickHandler?: any;
  purpose?: string;
}

export interface ButtonCategory {
  category: string;
  description?: string;
  buttons: ButtonInterface[];
}
