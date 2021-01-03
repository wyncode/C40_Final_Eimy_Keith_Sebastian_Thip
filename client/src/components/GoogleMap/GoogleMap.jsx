import { React, Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDolwcxzx6neqbYRJwCv9gSkqUMT3yvTYY' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;

// import { compose, withProps } from "recompose"
// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

// const MyMapComponent = compose(
//     withProps({
//         googleMapURL: "https://maps.googleapis.com/maps/api/js?&v=3.exp&libraries=geometry,drawing,places&key=${process.env.GOOGLE_MAPS_KEY}"
//         ,
//         loadingElement: <div style={{ height: `100%` }} />,
//         containerElement: <div style={{ height: `400px` }} />,
//         mapElement: <div style={{ height: `100%` }} />,
//     }),
//     withScriptjs,
//     withGoogleMap
// )((props) =>
//     <GoogleMap
//         defaultZoom={8}
//         defaultCenter={{ lat: -34.397, lng: 150.644 }}
//     >
//         {props.isMarkerShown && <Marker position={{ lat: 25.7617, lng: 80.1918 }} onClick={props.onMarkerClick} />}
//     </GoogleMap>
// )

// class MyFancyComponent extends React.PureComponent {
//     state = {
//         isMarkerShown: false,
//     }

//     componentDidMount() {
//         this.delayedShowMarker()
//     }

//     delayedShowMarker = () => {
//         setTimeout(() => {
//             this.setState({ isMarkerShown: true })
//         }, 3000)
//     }

//     handleMarkerClick = () => {
//         this.setState({ isMarkerShown: false })
//         this.delayedShowMarker()
//     }

//     render() {
//         return (
//             <MyMapComponent
//                 isMarkerShown={this.state.isMarkerShown}
//                 onMarkerClick={this.handleMarkerClick}
//             />
//         )
//     }
// }

// export default MyFancyComponent
