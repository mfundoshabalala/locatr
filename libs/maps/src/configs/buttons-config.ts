import { ButtonCategory } from '../interfaces/button.interface';

export const BUTTONS_CONFIG: ButtonCategory[] = [
  {
    category: 'Route Planning',
    description: 'Tools for optimizing routes and enhancing navigation options.',
    buttons: [
      {
        label: 'Calculate Shortest Path',
        purpose: 'Shortest Path Calculation',
        icon: '📏',
        clickHandler: 'handleShortestPath',
      },
      {
        label: 'Turn-by-Turn Navigation',
        purpose: 'Step-by-Step Navigation',
        icon: '🧭',
        clickHandler: 'handleTurnByTurn',
      },
      {
        label: 'Select Vehicle Type',
        purpose: 'Vehicle-Specific Routing',
        icon: '🚗',
        clickHandler: 'handleSelectVehicleType',
      },
      { label: 'Enable Traffic View', purpose: 'Traffic-Aware Routing', icon: '🚦', clickHandler: 'handleTrafficView' },
      { label: 'Avoid Toll Roads', purpose: 'Exclude Toll Roads', icon: '🚫💰', clickHandler: 'handleAvoidTollRoads' },
      { label: 'Avoid Highways', purpose: 'Exclude Highways', icon: '🚧', clickHandler: 'handleAvoidHighways' },
    ],
  },
  {
    category: 'Mapping and Visualization',
    description: 'Enhance map display with real-time tracking, custom boundaries, and data visualization.',
    buttons: [
      { label: 'Enable Live Tracking', purpose: 'Live Tracking', icon: '🛰️', clickHandler: 'handleLiveTracking' },
      { label: 'Draw Geofence', purpose: 'Geofencing', icon: '🔲', clickHandler: 'handleDrawGeofence' },
      { label: 'Heatmap View', purpose: 'Data Density Visualization', icon: '🌡️', clickHandler: 'handleHeatmapView' },
      {
        label: 'Draw Custom Shapes',
        purpose: 'Custom Shape Drawing',
        icon: '✏️',
        clickHandler: 'handleDrawCustomShapes',
      },
      {
        label: 'Overlay Data Layers',
        purpose: 'External Data Integration',
        icon: '📊',
        clickHandler: 'handleOverlayDataLayers',
      },
    ],
  },
  {
    category: 'User Interface',
    description: 'Tools to enhance user interaction and manage map layers and searches.',
    buttons: [
      { label: 'Search Location', purpose: 'Search and Geocoding', icon: '🔍', clickHandler: 'handleSearchLocation' },
      { label: 'Toggle Layer', purpose: 'Layer Management', icon: '🗂️', clickHandler: 'handleToggleLayer' },
      { label: 'Switch Map Type', purpose: 'Map Type', icon: '🗺️', clickHandler: 'handleSwitchMapType' },
      { label: 'Zoom In', purpose: 'Zoom In', icon: '🔍➕', clickHandler: 'handleZoomIn' },
      { label: 'Zoom Out', purpose: 'Zoom Out', icon: '🔍➖', clickHandler: 'handleZoomOut' },
    ],
  },
  {
    category: 'Safety and Accessibility',
    description: 'Ensure routes and maps cater to safety and accessibility needs.',
    buttons: [
      { label: 'Safe Routes', purpose: 'Safety-Prioritized Routing', icon: '🛡️', clickHandler: 'handleSafeRoutes' },
      {
        label: 'Wheelchair Accessible',
        purpose: 'Accessibility-Friendly Routes',
        icon: '♿',
        clickHandler: 'handleWheelchairAccessible',
      },
      {
        label: 'Emergency Services',
        purpose: 'Locate Emergency Services',
        icon: '🚑',
        clickHandler: 'handleEmergencyServices',
      },
    ],
  },
  {
    category: 'Tools and Utilities',
    description: 'Miscellaneous utilities for map interaction and data management.',
    buttons: [
      { label: 'Find My Location', purpose: 'Current Location', icon: '📍', clickHandler: 'handleFindMyLocation' },
      { label: 'Get Directions', purpose: 'Directions', icon: '🧭', clickHandler: 'handleGetDirections' },
      { label: 'Measure Distance', purpose: 'Measure Distance', icon: '📏', clickHandler: 'handleMeasureDistance' },
      { label: 'Measure Area', purpose: 'Measure Area', icon: '🗜️', clickHandler: 'handleMeasureArea' },
      { label: 'Save Map View', purpose: 'Save/Share', icon: '💾', clickHandler: 'handleSaveMapView' },
      { label: 'Share Map', purpose: 'Save/Share', icon: '📤', clickHandler: 'handleShareMap' },
      { label: 'Print Map', purpose: 'Print', icon: '🖨️', clickHandler: 'handlePrintMap' },
    ],
  },
  {
    category: 'Collaboration',
    description: 'Facilitate teamwork and information sharing among users.',
    buttons: [
      { label: 'Annotate Map', purpose: 'Add Comments and Notes', icon: '🖋️', clickHandler: 'handleAnnotateMap' },
      { label: 'Share Live Map', purpose: 'Real-Time Map Sharing', icon: '🌐', clickHandler: 'handleShareLiveMap' },
    ],
  },
  // {
  //   category: 'Route Optimization',
  //   buttons: [
  //     {
  //       label: 'Calculate Shortest Path',
  //       purpose: 'Shortest Path Calculation',
  //       icon: '🛣️',
  //       clickHandler: 'calculateShortestPath',
  //     },
  //     {
  //       label: 'Enable Traffic View',
  //       purpose: 'Traffic-Aware Routing',
  //       icon: '🚥',
  //       clickHandler: 'enableTrafficView',
  //     },
  //     {
  //       label: 'Select Vehicle Type',
  //       purpose: 'Vehicle-Specific Routing',
  //       icon: '🚚',
  //       clickHandler: 'selectVehicleType',
  //     },
  //   ],
  // },
  // {
  //   category: 'User Interface and Experience',
  //   buttons: [
  //     { label: 'Search Location', purpose: 'Search and Geocoding', icon: '🔍',  },
  //     { label: 'Toggle Layer', purpose: 'Layer Management', icon: '📊',  },
  //   ],
  // },
  // {
  //   category: 'Map',
  //   buttons: [
  //     {
  //       label: 'Refresh Map',
  //       icon: '🔄',
  //       clickHandler: 'refreshMap',
  //       disabled: true,
  //     },
  //     {
  //       label: 'Locate User',
  //       icon: '📍',
  //       clickHandler: 'locateUser',
  //     },
  //     {
  //       label: 'Fit Bounds',
  //       icon: '🔍',
  //       clickHandler: 'fitBounds',
  //     },
  //     {
  //       label: 'Change Map Type',
  //       icon: '🗺️',
  //       clickHandler: 'changeMapType',
  //     },
  //   ],
  // },
  // {
  //   category: 'Markers',
  //   buttons: [
  //     {
  //       label: 'Add Marker',
  //       icon: '➕',
  //       clickHandler: 'addMarker',
  //     },
  //     {
  //       label: 'Add Depot',
  //       icon: '🏢',
  //       clickHandler: 'addDepot',
  //       disabled: true,
  //     },
  //     {
  //       label: 'Clear Markers',
  //       icon: '🗑️',
  //       clickHandler: 'clearMarkers',
  //     },
  //   ],
  // },
  // {
  //   category: 'Routes',
  //   buttons: [
  //     {
  //       label: 'Route to Marker',
  //       icon: '🚗',
  //       clickHandler: 'routeToMarker',
  //       disabled: true,
  //     },
  //     {
  //       label: 'Show Route',
  //       icon: '🚧',
  //       clickHandler: 'showRoute',
  //     },
  //   ],
  // },
  // {
  //   category: 'Traffic',
  //   buttons: [
  //     {
  //       label: 'Toggle Traffic',
  //       icon: '🚦',
  //       clickHandler: 'toggleTraffic',
  //     },
  //   ],
  // },
  // {
  //   category: 'Data',
  //   buttons: [
  //     {
  //       label: 'Import Data',
  //       icon: '📂',
  //       clickHandler: 'importData',
  //       disabled: true,
  //     },
  //     {
  //       label: 'Export Data',
  //       icon: '💾',
  //       clickHandler: 'exportData',
  //       disabled: true,
  //     },
  //   ],
  // },
];
