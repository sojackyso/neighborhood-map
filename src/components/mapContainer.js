import React from 'react';

import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import { compose } from "recompose"
import MarkersContainer from './markersContainer'



const MapContainer = (props =>{


const markers = props.locations.map( currentLocation =>
									<MarkersContainer
										selectedLocation = { props.selectedLocation }
										location = {{ lat: currentLocation.location.lat, lng: currentLocation.location.lng }}
										key={currentLocation.id}
										name = {currentLocation.name}
										isOpen = {props.isOpen}
										checkId = { currentLocation.id }
										locationsNotFound = { props.locationsNotFound }
										address = { currentLocation.location.formattedAddress}
										onClick={(event) => props.handleChildClickEvent(event, currentLocation.location, currentLocation.id)}

									/>
)
	return (

		<GoogleMap
			zoom ={ props.zoom }
       		center = { props.newCenter }
		>
		{ markers }

		</GoogleMap>

	)

})



export default compose(
	withScriptjs,
	withGoogleMap)(MapContainer);
