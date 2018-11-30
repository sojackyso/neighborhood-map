/*React App Notes
1. Edit src/App.js and save to reload http://localhost:3000/
2. Resource: https://reactjs.org/
3. Make sure state control so event handlers are passed as props to child components
4. Lifecycle Events for component:
componentWillMount(),
componentDidMount(), * will use this (invoked right after compontent inserted into tree)
componentWillUnmount(),
componentWillReceiveProps()
5. If use constructor(props), remember to use super(props)
https://daveceddia.com/where-initialize-state-react/


*/
/*================== Import everything you need ===================*/
import React, { Component } from 'react';
// not using logo, so comment out
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import header from './components/header';
// add search bar
import searchBar from './components/searchBar';
import navigationMenu from './components/navigationMenu';
import errorBoundary from './components/errorBoundary';
import escapeRegExp from 'escape-string-regexp';


class App extends Component {
  /*================== Store data in a state ===================
  constructor(props) {
    super(props)
    this.state = {
      venues: [],
      markers: [],
      showVenues: [],
      query: '',
      notVisibleMarkers: []
  }}
  */
  // Instead of hard coding array of venues, use empty array to make it dynamic, but add to axios.get .then(response) part

  state = {
    venues: []
  }

  // add in the map variable below, use Mount Sinai Medical Center coordinates in Miami Beach, FL
/*================== Component lifecycle event ====================*/
// Get venue info first, then render map after certain app has location info needed
componentDidMount() {
  this.getVenues()
}

/*================== Google Maps API key ====================*/
renderMap = () => {
  useScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyCB2xjqXIDoQTCybiOeYjAJSX80VmGsT4w&callback=initMap")
  window.initMap = this.initMap
}

/*=============== Foursquare calls their places 'Venues' ================ */
// View required venue parameters at https://developer.foursquare.com/docs/api/venues/search
// Need ll (for latitude and longitude) unless use "near" parameter for location
// https://reactjs.org/docs/state-and-lifecycle.html

getVenues = () => {
  const endpointAPI = "https://api.foursquare.com/v2/venues/explore?"
  const locationParameters = {
    client_id: "YVSNSMCSPYQTTKMXI4CIYNI55OKH4J51FBZWYGK2CAZZE0L1",
    client_secret: "UEIWIJWRRQ4Q40U4RYDEQOCZMHAWMVM1I0LA2HGUXAKFXSN3",
    query: "mount sinai",
    near: "Miami Beach, FL",
    v: "20181125"
  }

  axios.get(endpointAPI + new URLSearchParams(locationParameters))
    .then(response => {
      this.setState({
        // console.log(response)
        venues: response.data.response.groups[0].items,
        // showVenues: response.data.response.groups[0].items
      },
      this.renderMap())
    })
    .catch(error => {
      console.log("Oh noes, sorry about this error." + error)
    })
}

/*=============== Initialize Map ================ */
// Find lat long benchmark via http://www.lat-long.com/Latitude-Longitude-287319-Florida-Mount_Sinai_Hospital.html
// Add google map markers using https://developers.google.com/maps/documentation/javascript/markers
// Define google using 'window.google.maps' so it can display in window
// Write function to loop over each venue state and add marker

  initMap = () => {
    var map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: 25.8142, lng: -80.1399},
      zoom: 9
    })

    // https://developers.google.com/maps/documentation/javascript/infowindows
    var infoWindow = new window.google.maps.InfoWindow()
    this.infoWindow = infoWindow

    // eslint-disable-next-line
    this.state.venues.map(venueInfo => {
      var infoSnippet = `<strong>${venueInfo.venue.name}</strong>
      <br>Available Address:<br>${venueInfo.venue.location.address}
      <br> ${venueInfo.venue.location.city}, ${venueInfo.venue.location.postalCode}`

      var marker = new window.google.maps.Marker({
        position: {lat: venueInfo.venue.location.lat, lng: venueInfo.venue.location.lng},
        map: map,
        title: venueInfo.venue.name,
        animation: window.google.maps.Animation.DROP,
      })
      function animateSelection() {
        marker.setAnimation(window.google.maps.Animation.BOUNCE)
        setTimeout(function(){ marker.setAnimation(null) }, 550)
      }

      function openMarker() {
        // Setting the content of the InfoWindow
        infoWindow.setContent(infoSnippet)
        animateSelection()
        // this.state.markers.push(marker)
  }
      marker.addListener('click', function() {
        // setContent to display the title of each location as a snippet
          infoWindow.setContent(infoSnippet)
          infoWindow.open(map, marker);
          openMarker()
        })
  })
}

/*=======================  Filter View =============================*/
updateQuery = query => {
  this.setState({ query })
  this.state.markers.map(marker => marker.setVisible(true))
  let filterVenues
  let notVisibleMarkers

  if (query) {
    var match = new RegExp(escapeRegExp(query), "i")
    filterVenues = this.state.venues.filter(venueInfo =>
      match.test(venueInfo.venue.name)
    )
    this.setState({ venues: filterVenues })
    notVisibleMarkers = this.state.markers.filter(marker =>
      filterVenues.every(venueInfo => venueInfo.venue.name !== marker.title)
    )


    notVisibleMarkers.forEach(marker => marker.setVisible(false))

    this.setState({ notVisibleMarkers })
  } else {
    this.setState({ venues: this.state.showVenues })
    this.state.markers.forEach(marker => marker.setVisible(true))
  }
}

    render() {
      if (this.state.hasError) {
        return <div id="Error-message" aria-label="Error message">Sorry, something went wrong!</div>
      } else {
      return (
        // The module below returns your app's main page
        <main>
        <errorBoundary>

        <div id="header" aria-label="Header">
          <header />
        </div>
        <div id="SearchBar" aria-label="Search Bar">
          <searchBar
            venues={ this.state.showVenues }
            markers={ this.state.markers }
            filteredVenues={ this.filteredVenues }
  	      	query={this.state.query}
            clearQuery={this.clearQuery}
	        	updateQuery={b => this.updateQuery(b)}
	        	clickLocation={this.clickLocation}
          />
        </div>
        <div id="container" aria-label="Menu Container">
          <navigationMenu
            venues={ this.state.venues }
            markers={ this.state.markers }
          />
        </div>
          <div id="map" aria-label="Map" role="application"></div>
          </errorBoundary>
        </main>
      )
    }
}
}



/*

<script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCB2xjqXIDoQTCybiOeYjAJSX80VmGsT4w&callback=initMap">
    async defer </script>

*/

/*=========== Function for Async Call so we call Map API only once ===========*/
function useScript(url) {
  var index  = window.document.getElementsByTagName("script")[0]
  var script = window.document.createElement("script")
  script.src = url
  // this should be true
  script.async = true
  script.defer = true
  // so a node can't be in two places simultaneously. appendChild same as insertBefore.
  // https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore
  index.parentNode.insertBefore(script, index)
}

export default App;

/*=========== Asynch call example for map from Google Developers ===========
function initialize() {
  initMap();
  initAutocomplete();
}
var map, marker;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {
        lat: -34.397,
        lng: 150.644
      },
      zoom: 8
    });
  }
*/

/* ================= Default App Homepage Displayed ====================
class App extends Component {
  render() {
    return (
      // The module below that gets returned is the default React logo home page. You can change this to be whatever you want to show instead.
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
*/
