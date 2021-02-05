import WebMap from '@arcgis/core/WebMap';
import MapView from '@arcgis/core/views/MapView';

import './style.css'

const webmap = new WebMap({
  portalItem: {
    id: 'f2e9b762544945f390ca4ac3671cfa72'
  }
});

const view = new MapView({
  map: webmap,
  container: 'viewDiv'
});

view.when(() => console.log('view ready'));
