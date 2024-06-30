export interface ButtonConfig {
  label: string;
  icon: string;
  disabled?: boolean;
}

export interface ButtonInterface extends ButtonConfig {
  clickHandler?: any;
  description?: string;
}

export interface ButtonCategory {
  category: string;
  buttons: ButtonInterface[];
}
