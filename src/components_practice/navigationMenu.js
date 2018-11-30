import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
// import './components/navigationMenu.css';

class navigationMenu extends Component {

  /*
   * openMarker function: is called with the onClick event
   * when a list item is clicked
  */
  // eslint-disable-next-line
  openMarker = locationName => {
    // eslint-disable-next-line
    this.props.markers.map(marker => {
      if (marker.title === locationName) {
        window.google.maps.event.trigger(marker, "click")
      }
    })
  }


  render () {
    return (
      <Menu width={ '25%' } isOpen noOverlay >
        <div className="listOfVenues" aria-label="List of Venues">
        {this.props.venues.map(venueInfo => (
            <li role="menuitem"
              onClick={() => {
                this.openMarker(venueInfo.venue.name);
              }}
              aria-label={venueInfo.venue.name}
              tabIndex="0"
              id={venueInfo.venue.id}
              key={venueInfo.venue.id}
            >
              <br/>
              <b>{venueInfo.venue.name}</b>
              <br/>
              <i>{venueInfo.venue.location.address}</i>
            </li>
          ))}
          <p>
            <i>Data fetched from Foursquare</i>
          </p>
          </div>
      </Menu>
    );
  }
}

export default navigationMenu
