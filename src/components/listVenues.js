import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
class Map extends Component {
   render() {
   const GoogleMapDisplay = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 25.8142, lng: -80.1399 } }
        defaultZoom = { 13.5 }
      >
      </GoogleMap>
   ));
   return(
      <div>
        <GoogleMapDisplay
          containerElement={ <div style={{ height: `600px`, width: '600px' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
   );
   }
};
export default Map;
