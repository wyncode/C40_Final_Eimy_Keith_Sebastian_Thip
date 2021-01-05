import React, { Component } from 'react';

//Second Try
import GoogleMapReact from 'google-map-react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const AnyReactComponent = ({ text }) => (
  <div>
    <FontAwesomeIcon icon={faMapMarkerAlt} size="1x" />
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
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            className="GoogleSearchBar"
            placeholder="Search a community"
          ></input>
        </form>

        <div style={{ height: '75vh', width: '100%' }}>
          {this.props.mapKey && (
            <GoogleMapReact
              bootstrapURLKeys={{ key: this.props.mapKey, libraries: 'places' }}
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
      </>
    );
  }
}
export default SimpleMap;

// First Try

// import {compose, withProps } from "recompose"
// import {withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

// const MyMapComponent = compose(
//   withProps({
//     googleMapURL: "https://maps.googleapis.com/maps/api/js?&v=3.exp&libraries=geometry,drawing,places&key=${process.env.GOOGLE_MAPS_KEY}"
//     ,
//     loadingElement: <div style={{ height: `100%` }} />,
//     containerElement: <div style={{ height: `400px` }} />,
//     mapElement: <div style={{ height: `100%` }} />,
//   }),
//   withScriptjs,
//   withGoogleMap
// )((props) =>
//   <GoogleMap
//     defaultZoom={8}
//     defaultCenter={{ lat: -34.397, lng: 150.644 }}
//   >
//     {props.isMarkerShown && <Marker position={{ lat: 25.7617, lng: 80.1918 }} onClick={props.onMarkerClick} />}
//   </GoogleMap>
// )

// class MyFancyComponent extends React.PureComponent {
//   state = {
//     isMarkerShown: false,
//   }

//   componentDidMount() {
//     this.delayedShowMarker()
//   }

//   delayedShowMarker = () => {
//     setTimeout(() => {
//       this.setState({ isMarkerShown: true })
//     }, 3000)
//   }

//   handleMarkerClick = () => {
//     this.setState({ isMarkerShown: false })
//     this.delayedShowMarker()
//   }

//   render() {
//     return (
//       <MyMapComponent
//         isMarkerShown={this.state.isMarkerShown}
//         onMarkerClick={this.handleMarkerClick}
//       />
//     )
//   }
// }

// export default MyFancyComponent
