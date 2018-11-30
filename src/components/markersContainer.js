import React, { Component } from 'react';
import { Marker, InfoWindow  } from "react-google-maps"

class markersContainer extends Component  {

	toggleAnimation = () => {
	}
    render() {

        return (
          /*
          <Marker onClick={() => this.props.showInfo(Marker.index)}>
            {(this.props.isOpen && this.props.infoIndex === Marker.index) &&
              <InfoWindow onCloseClick={this.props.showInfo}>
                <span>{Marker.info}</span>
              </InfoWindow>}
          </Marker>
        )
    }
    */

      ((!this.props.locationsNotFound)  &&
	     ( <Marker
		       position = { this.props.location }
		       name = { this.props.name }
           address = { this.props.address }
		       onClick={ this.props.onClick }
		       selectedLocation = { this.props.selectedLocation }
		       animation = { (this.props.selectedLocation === this.props.checkId)
          && ( window.google.maps.Animation.DROP )}
      // ( window.google.maps.Animation(4))}
      // setTimeout(window.google.maps.Animation(null); }, 750);
      // marker.setAnimation(4);
        >

		{ (this.props.selectedLocation === this.props.checkId ) &&
	  	(<InfoWindow onCloseClick = {() =>

// not sure how to get rid of this notification. Tried but it's tied to the react-google-maps
		{alert('Are you sure you want to close this result? If yes, click "OK".')}}
    >
      <div className='info-window'>
						<span className='info-window-name'> { this.props.name || 'Having trouble finding this name.'}
						</span><br/>{ this.props.address  || 'Having trouble finding this address.' }
						</div>
      				</InfoWindow> ) }
            </Marker> ))
            )
          }
        }
/*
{(this.props.selectedLocation === this.props.checkId) &&
<InfoWindow onCloseClick = {this.onInfoWindowClose}>
</InfoWindow>}
</Marker>))
)
}
}
*/
export default markersContainer
