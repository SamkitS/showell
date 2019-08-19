import {
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";
import React from 'react';


 const InitialMap = withGoogleMap(props => {
return (
    <GoogleMap
    ref = {props.onMapload}
    defaultZoom = {14}
    defaultCenter = {{lat:19.204729, lng: 72.836778}}
    >
    {props.isMarkerShown && <Marker position={{ lat: 19.204729, lng: 72.836778 }} />}

    <Marker 
    // key = {index}
    position = {{lat:19.204729, lng: 72.836778}}
    // onClick = {() => props.onMarkerClick(marker)}
    />
    </ GoogleMap>
)
});

export default InitialMap;







