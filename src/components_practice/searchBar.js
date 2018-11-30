import React, { Component } from 'react'

class searchBar extends Component {

  render() {
      return (
        <div className="locationsFilter" role="application">
          <input
          type="text"
          autoFocus
          id="query-Filter"
          placeholder="Filter by..."
          aria-label="Locations filter"
          value={this.props.query}
          onChange={event => this.props.updateQuery(event.target.value)}
          />
        </div>
      );
    }
}


export default searchBar;
