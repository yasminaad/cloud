import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
  
  
};

const center = {
  lat: 35.821430,
  lng: 10.634422
};

function MyComponent() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBU_LMXFxf0VS2YbbWiJ3DIjZOlvdhsqeg"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent)