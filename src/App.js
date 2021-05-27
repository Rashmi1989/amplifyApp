
import react from 'react';
import './App.css';
import { red } from 'ansi-colors';


const App=()=> {

  function geocodeAddress(){
    alert("Its called");

    try {
      window.webkit.messageHandlers.geocodeAddress.postMessage(
          {
              street: document.getElementById("street").value,
              city: document.getElementById("city").value,
              state: document.getElementById("state").value,
              country: document.getElementById("country").value
          });
      document.querySelector('h1').style.color = "green";
  } catch(err) {
      document.querySelector('h1').style.color = "red";
  }
    
  }

  function changeBackgroundColor(colorText) {
    document.body.style.background = colorText;
}

function setLatLon(lat, lon) {
    document.getElementById("latitude").value = lat;
    document.getElementById("longitude").value = lon;
}

  return (
    <div className="App">
      <header className="App-header">
      <h1>Enter Address to Geocode</h1>
      
        <table cellspacing="10">
            <tr><td>Address</td><td><input id="street" type="text" width="80"/></td></tr>
            <tr><td>City</td><td><input id="city" type="text" width="50" /></td></tr>
            <tr><td>State</td><td><input id="state" type="text" width="10"/></td></tr>
            <tr><td>Country</td><td><input id="country" type="text" width="10"/></td></tr>
            <tr><td></td><input type="submit" value="Geocode Address" onClick={geocodeAddress} /> </tr>
          <tr></tr>
            <tr><td>Latitude</td><td><input id="latitude" type="text" width="50" /></td></tr>
            <tr><td>Longitude</td><td><input id="longitude" type="text" width="50" /></td></tr>
        </table>
      </header> 
    </div>
  );
}

export default App;


