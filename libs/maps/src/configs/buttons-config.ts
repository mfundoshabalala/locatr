export interface ButtonConfig {
  label: string;
  clickHandler?: () => void;
  icon: string;
}

export interface ButtonCategory {
  category: string;
  buttons: ButtonConfig[];
}

export const BUTTONS_CONFIG: ButtonCategory[] = [
  {
    category: 'Map',
    buttons: [
      { label: 'Refresh Map', icon: '🔄' },
      { label: 'Locate User', icon: '📍' },
      { label: 'Fit Bounds', icon: '🔍' },
      { label: 'Change Map Type', icon: '🗺️' },
    ],
  },
  {
    category: 'Markers',
    buttons: [
      { label: 'Add Marker', icon: '➕' },
      { label: 'Add Depot', icon: '🏢' },
      { label: 'Clear Markers', icon: '🗑️' },
    ],
  },
  {
    category: 'Routes',
    buttons: [
      { label: 'Route to Marker', icon: '🚗' },
      { label: 'Show Route', icon: '🚧' },
    ],
  },
  {
    category: 'Traffic',
    buttons: [{ label: 'Toggle Traffic', icon: '🚦' }],
  },
  {
    category: 'Data',
    buttons: [
      { label: 'Import Data', icon: '📂' },
      { label: 'Export Data', icon: '💾' },
    ],
  },
];
