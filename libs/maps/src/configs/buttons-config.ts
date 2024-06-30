import {
  ButtonCategory } from '../interfaces/button.interface';

export const BUTTONS_CONFIG: ButtonCategory[] = [
  {
    category: 'Route Optimization',
    buttons: [
      {
        label: 'Calculate Shortest Path',
        description: 'Shortest Path Calculation',
        icon: '🛣️',
        clickHandler: 'calculateShortestPath',
      },
      {
        label: 'Enable Traffic View',
        description: 'Traffic-Aware Routing',
        icon: '🚥',
        clickHandler: 'enableTrafficView',
      },
      {
        label: 'Select Vehicle Type',
        description: 'Vehicle-Specific Routing',
        icon: '🚚',
        clickHandler: 'selectVehicleType',
      },
    ],
  },
  {
    category: 'User Interface and Experience',
    buttons: [
      { label: 'Search Location', description: 'Search and Geocoding', icon: '🔍',  },
      { label: 'Toggle Layer', description: 'Layer Management', icon: '📊',  },
    ],
  },
  {
    category: 'Map',
    buttons: [
      {
        label: 'Refresh Map',
        icon: '🔄',
        clickHandler: 'refreshMap',
        disabled: true,
      },
      {
        label: 'Locate User',
        icon: '📍',
        clickHandler: 'locateUser',
      },
      {
        label: 'Fit Bounds',
        icon: '🔍',
        clickHandler: 'fitBounds',
      },
      {
        label: 'Change Map Type',
        icon: '🗺️',
        clickHandler: 'changeMapType',
      },
    ],
  },
  {
    category: 'Markers',
    buttons: [
      {
        label: 'Add Marker',
        icon: '➕',
        clickHandler: 'addMarker',
      },
      {
        label: 'Add Depot',
        icon: '🏢',
        clickHandler: 'addDepot',
        disabled: true,
      },
      {
        label: 'Clear Markers',
        icon: '🗑️',
        clickHandler: 'clearMarkers',
      },
    ],
  },
  {
    category: 'Routes',
    buttons: [
      {
        label: 'Route to Marker',
        icon: '🚗',
        clickHandler: 'routeToMarker',
        disabled: true,
      },
      {
        label: 'Show Route',
        icon: '🚧',
        clickHandler: 'showRoute',
      },
    ],
  },
  {
    category: 'Traffic',
    buttons: [
      {
        label: 'Toggle Traffic',
        icon: '🚦',
        clickHandler: 'toggleTraffic',
      },
    ],
  },
  {
    category: 'Data',
    buttons: [
      {
        label: 'Import Data',
        icon: '📂',
        clickHandler: 'importData',
        disabled: true,
      },
      {
        label: 'Export Data',
        icon: '💾',
        clickHandler: 'exportData',
        disabled: true,
      },
    ],
  },
];
