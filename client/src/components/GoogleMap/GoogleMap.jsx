import React, { Component } from 'react';

//Second Try
import GoogleMapReact from 'google-map-react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import { faSearch } from '@fortawesome/free-solid-svg-icons';

const AnyReactComponent = ({ text }) => (
  <div>
    <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />
    {text}
  </div>
);

class SimpleMap extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = { locations: null, value: '' };
  }
  static defaultProps = {
    center: {
      lat: 25.7617,
      lng: -80.1918
    },
    zoom: 12
  };
  async handleSubmit(event) {
    event.preventDefault();
    const { data } = await axios.get(`api/search?location=${this.state.value}`);
    console.log(event.target.value);
    console.log(data);
    this.setState({ locations: data });
  }
  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    return (
      <>
        <form className="GoogleSearchForm" onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            className="GoogleSearchBar"
            placeholder="Search a community"
          ></input>
          <button className="GoogleSearchButton" type="submit">
            <FontAwesomeIcon className="SearchIcon" icon={faSearch} size="3x" />
          </button>
        </form>
        <div className="Map">
          <div style={{ height: '60vh', width: '80%' }}>
            {this.props.mapKey && (
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: this.props.mapKey,
                  libraries: 'places'
                }}
                defaultZoom={this.props.zoom}
                center={
                  !this.state.locations
                    ? this.props.center
                    : {
                        lat: this.state.locations[0].coordinates.latitude,
                        lng: this.state.locations[0].coordinates.longitude
                      }
                }
              >
                {this.state.locations &&
                  this.state.locations.map((location) => {
                    console.log(location);
                    return (
                      <AnyReactComponent
                        lat={location.coordinates.latitude}
                        lng={location.coordinates.longitude}
                        text={location.name}
                      />
                    );
                  })}
              </GoogleMapReact>
            )}
          </div>
        </div>
      </>
    );
  }
}
export default SimpleMap;
