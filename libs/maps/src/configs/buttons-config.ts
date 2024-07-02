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
        method: 'handleShortestPath',
      },
      {
        label: 'Turn-by-Turn Navigation',
        purpose: 'Step-by-Step Navigation',
        icon: '🧭',
        method: 'handleTurnByTurn',
      },
      {
        label: 'Select Vehicle Type',
        purpose: 'Vehicle-Specific Routing',
        icon: '🚗',
        method: 'handleSelectVehicleType',
      },
      { label: 'Enable Traffic View', purpose: 'Traffic-Aware Routing', icon: '🚦', method: 'handleTrafficView' },
      { label: 'Avoid Toll Roads', purpose: 'Exclude Toll Roads', icon: '🚫💰', method: 'handleAvoidTollRoads' },
      { label: 'Avoid Highways', purpose: 'Exclude Highways', icon: '🚧', method: 'handleAvoidHighways' },
    ],
  },
  {
    category: 'Mapping and Visualization',
    description: 'Enhance map display with real-time tracking, custom boundaries, and data visualization.',
    buttons: [
      { label: 'Enable Live Tracking', purpose: 'Live Tracking', icon: '🛰️', method: 'handleLiveTracking' },
      { label: 'Draw Geofence', purpose: 'Geofencing', icon: '🔲', method: 'handleDrawGeofence' },
      { label: 'Heatmap View', purpose: 'Data Density Visualization', icon: '🌡️', method: 'handleHeatmapView' },
      {
        label: 'Draw Custom Shapes',
        purpose: 'Custom Shape Drawing',
        icon: '✏️',
        method: 'handleDrawCustomShapes',
      },
      {
        label: 'Overlay Data Layers',
        purpose: 'External Data Integration',
        icon: '📊',
        method: 'handleOverlayDataLayers',
      },
    ],
  },
  {
    category: 'User Interface',
    description: 'Tools to enhance user interaction and manage map layers and searches.',
    buttons: [
      { label: 'Fit to Bounds', purpose: 'Fit markers to bounds', icon: '🔍', method: 'handleFitBounds' },
      { label: 'Search Location', purpose: 'Search and Geocoding', icon: '🔍', method: 'handleSearchLocation' },
      { label: 'Toggle Layer', purpose: 'Layer Management', icon: '🗂️', method: 'handleToggleLayer' },
      { label: 'Switch Map Type', purpose: 'Map Type', icon: '🗺️', method: 'handleSwitchMapType' },
      { label: 'Zoom In', purpose: 'Zoom In', icon: '🔍➕', method: 'handleZoomIn' },
      { label: 'Zoom Out', purpose: 'Zoom Out', icon: '🔍➖', method: 'handleZoomOut' },
    ],
  },
  {
    category: 'Safety and Accessibility',
    description: 'Ensure routes and maps cater to safety and accessibility needs.',
    buttons: [
      { label: 'Safe Routes', purpose: 'Safety-Prioritized Routing', icon: '🛡️', method: 'handleSafeRoutes' },
      {
        label: 'Wheelchair Accessible',
        purpose: 'Accessibility-Friendly Routes',
        icon: '♿',
        method: 'handleWheelchairAccessible',
      },
      {
        label: 'Emergency Services',
        purpose: 'Locate Emergency Services',
        icon: '🚑',
        method: 'handleEmergencyServices',
      },
    ],
  },
  {
    category: 'Tools and Utilities',
    description: 'Miscellaneous utilities for map interaction and data management.',
    buttons: [
      { label: 'Find My Location', purpose: 'Current Location', icon: '📍', method: 'handleFindMyLocation' },
      { label: 'Get Directions', purpose: 'Directions', icon: '🧭', method: 'handleGetDirections' },
      { label: 'Measure Distance', purpose: 'Measure Distance', icon: '📏', method: 'handleMeasureDistance' },
      { label: 'Measure Area', purpose: 'Measure Area', icon: '🗜️', method: 'handleMeasureArea' },
      { label: 'Save Map View', purpose: 'Save/Share', icon: '💾', method: 'handleSaveMapView' },
      { label: 'Share Map', purpose: 'Save/Share', icon: '📤', method: 'handleShareMap' },
      { label: 'Print Map', purpose: 'Print', icon: '🖨️', method: 'handlePrintMap' },
    ],
  },
  {
    category: 'Collaboration',
    description: 'Facilitate teamwork and information sharing among users.',
    buttons: [
      { label: 'Annotate Map', purpose: 'Add Comments and Notes', icon: '🖋️', method: 'handleAnnotateMap' },
      { label: 'Share Live Map', purpose: 'Real-Time Map Sharing', icon: '🌐', method: 'handleShareLiveMap' },
    ],
  },
  // {
  //   category: 'Route Optimization',
  //   buttons: [
  //     {
  //       label: 'Calculate Shortest Path',
  //       purpose: 'Shortest Path Calculation',
  //       icon: '🛣️',
  //       method: 'calculateShortestPath',
  //     },
  //     {
  //       label: 'Enable Traffic View',
  //       purpose: 'Traffic-Aware Routing',
  //       icon: '🚥',
  //       method: 'enableTrafficView',
  //     },
  //     {
  //       label: 'Select Vehicle Type',
  //       purpose: 'Vehicle-Specific Routing',
  //       icon: '🚚',
  //       method: 'selectVehicleType',
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
  //       method: 'refreshMap',
  //       disabled: true,
  //     },
  //     {
  //       label: 'Locate User',
  //       icon: '📍',
  //       method: 'locateUser',
  //     },
  //     {
  //       label: 'Fit Bounds',
  //       icon: '🔍',
  //       method: 'fitBounds',
  //     },
  //     {
  //       label: 'Change Map Type',
  //       icon: '🗺️',
  //       method: 'changeMapType',
  //     },
  //   ],
  // },
  // {
  //   category: 'Markers',
  //   buttons: [
  //     {
  //       label: 'Add Marker',
  //       icon: '➕',
  //       method: 'addMarker',
  //     },
  //     {
  //       label: 'Add Depot',
  //       icon: '🏢',
  //       method: 'addDepot',
  //       disabled: true,
  //     },
  //     {
  //       label: 'Clear Markers',
  //       icon: '🗑️',
  //       method: 'clearMarkers',
  //     },
  //   ],
  // },
  // {
  //   category: 'Routes',
  //   buttons: [
  //     {
  //       label: 'Route to Marker',
  //       icon: '🚗',
  //       method: 'routeToMarker',
  //       disabled: true,
  //     },
  //     {
  //       label: 'Show Route',
  //       icon: '🚧',
  //       method: 'showRoute',
  //     },
  //   ],
  // },
  // {
  //   category: 'Traffic',
  //   buttons: [
  //     {
  //       label: 'Toggle Traffic',
  //       icon: '🚦',
  //       method: 'toggleTraffic',
  //     },
  //   ],
  // },
  // {
  //   category: 'Data',
  //   buttons: [
  //     {
  //       label: 'Import Data',
  //       icon: '📂',
  //       method: 'importData',
  //       disabled: true,
  //     },
  //     {
  //       label: 'Export Data',
  //       icon: '💾',
  //       method: 'exportData',
  //       disabled: true,
  //     },
  //   ],
  // },
];
