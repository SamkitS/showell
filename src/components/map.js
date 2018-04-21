import React from 'react';
const { compose, withProps, withState, withHandlers } = require("recompose");
// const FaAnchor = require("react-icons/lib/fa/anchor");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} = require("react-google-maps");

const MapWithControlledZoom = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withState('zoom', 'onZoomChange', 8),
  withHandlers(() => {
    const refs = {
      map: undefined,
    }

    return {
      onMapMounted: () => ref => {
        refs.map = ref
      },
      onZoomChanged: ({ onZoomChange }) => () => {
        onZoomChange(refs.map.getZoom())
      }
    }
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultCenter={{ lat: 19.204729, lng: 72.836778 }}
    zoom={props.zoom}
    ref={props.onMapMounted}
    onZoomChanged={props.onZoomChanged}
  >
    <Marker
      position={{ lat: 19.204729, lng: 72.836778 }}
      onClick={props.onToggleOpen}
    >
      <InfoWindow onCloseClick={props.onToggleOpen}>
        <div>
          {/* <FaAnchor /> */}
          {" "}
          Controlled zoom: {props.zoom}
        </div>
      </InfoWindow>
    </Marker>
  </GoogleMap>
);

export default MapWithControlledZoom;

































// import {
//     withGoogleMap,
//     GoogleMap,
//     InfoWindow,
//     Marker,
// } from "react-google-maps";
// import React from 'react';


//  const InitialMap = withGoogleMap(props => {
// return (
//     <GoogleMap
//     ref = {props.onMapload}
//     defaultZoom = {14}
//     defaultCenter = {{lat:19.204729, lng: 72.836778}}
//     >
//     {props.isMarkerShown && <Marker position={{ lat: 19.204729, lng: 72.836778 }} />}

//     <Marker 
//     // key = {index}
//     position = {{lat:19.204729, lng: 72.836778}}
//     // onClick = {() => props.onMarkerClick(marker)}
//     />
//     </ GoogleMap>
// )
// });

// export default InitialMap;







