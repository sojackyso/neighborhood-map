/*
<mapContainer /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.
Good resource for react google map help - https://www.fullstackreact.com/articles/how-to-write-a-google-maps-react-component/
*/

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MapContainer from './components/mapContainer.js'
import SearchContainer from './components/searchContainer.js'
import * as foursquaredata from './components/foursquaredata.js'



class App extends Component {

	state = {
		locations: [],
		locationsToUse: [],
		locationsNotFound: false,
		newCenter: { lat: 25.8142, lng: -80.1399 },
		zoom: 17,
		isOpen: false,
		selectedLocation: {},
		query: ''
    // infoIndex: null,
    // showInfo: ({ isOpen, infoIndex }) => (index) => ({
    // isOpen: infoIndex !== index || !isOpen,
    // infoIndex: index})
	}

  componentDidMount() {
	  function handleErrors(response) {
			if (response.ok) {
				throw Error(response.statusText);
			}
			return response;
		}

// Places / Locations in Foursquare called "Venues"
		 foursquaredata.getVenues().then(handleErrors)
			 .then((locations) => {
			 this.setState({locations: locations,
							locationsToUse: locations
						   })
		 }).catch((error) => {
			 alert('Oops, sorry about this. Error loading data. Please check connection, refresh and try again.')
		 })

	}


/* ================ Event Handlers ================ */

// what happens when the items are clicked
	  handleChildClickEvent = (action, location, id) => {


// React.Children.only expected to receive a single React element child.

		  if(location !== undefined) {
		  this.setState({
			  newCenter: {lat: location.lat, lng: location.lng },
			  zoom: 17,
			  isOpen: true,
			  selectedLocation: id
		  })


	  }}


// use search results to update map
	  updateLocations = (searchResultArr, query) => {
    if(searchResultArr) {
      this.setState((state) => ({
          locationsToUse: searchResultArr,
		  zoom: 17,
		  newCenter: { lat: 25.8142, lng: -80.1399 },
		  locationsNotFound: false
      }))

	} else  {

		this.setState({
			locationsToUse: this.state.locations,
			locationsNotFound: false
		})


   }

  }

		updateQuery = (query) => {
			this.setState({
			query: query
		})
	}




  render() {
	  console.log('Locations:', this.state.locations )
	  console.log('Get by:', this.state.locationsToUse )
    return (
      <div id="main">

		<header id="header">
          <img src={logo} id="header-logo" alt="header-logo" />
          <h1 className="Mount Sinai in Florida single page app" tabIndex="0">Mount Sinai in Miami Beach, FL</h1>
        </header>
{/* passing props and states to MapContainer */}
		<MapContainer
				selectedLocation = { this.state.selectedLocation }
				locations = { this.state.locationsToUse }
				locationsNotFound = { this.state.locationsNotFound }
				newCenter = { this.state.newCenter }
				zoom = { this.state.zoom }
				handleChildClickEvent = { this.handleChildClickEvent }
				isOpen = { this.state.isOpen }
		 		googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCB2xjqXIDoQTCybiOeYjAJSX80VmGsT4w&v=3.exp&libraries=geometry,drawing,places`}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div id="map-container" aria-label="map container" tabIndex="0" role="application" style={{ height: `700px` }} />}
				mapElement={<div style={{ height: `100%` }} />}

		/>

		<SearchContainer
			locations = { this.state.locations }
			locationsToUse = { this.state.locationsToUse }
			locationsNotFound = { this.state.locationsNotFound }
			handleChildClickEvent = { this.handleChildClickEvent }
			selectedLocation = { this.state.selectedLocation }
			onUserDidSearch= { this.updateLocations }
		/>

			<div id="footer-container">
				<div id="footer-info" tabIndex="0">
		Dev with &hearts; <a href="https://github.com/sojackyso" tabIndex="0" aria-label="Jacky So's Github">@sojackyso</a> <br/> - <br/>
		<a href="https://developers.google.com/maps/documentation/javascript/get-api-key"
    tabIndex="0" aria-label="Google Maps for Developers"> • Google Maps Display </a>
    <br/>
		<a href="https://developer.foursquare.com/" tabIndex="0"
          		 	aria-label="Foursquare API for Developers"> • Foursquare API Location Info</a></div>
			</div>
      </div>

    );
  }
}
export default App;
