
import react from 'react';

function App() {

  function geocodeAddress(){
    alert("hello");
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
            <tr><td></td><input type="submit" value="Geocode Address" onclick={geocodeAddress} /> </tr>
          <tr></tr>
            <tr><td>Latitude</td><td><input id="latitude" type="text" width="50" /></td></tr>
            <tr><td>Longitude</td><td><input id="longitude" type="text" width="50" /></td></tr>
        </table>
      </header>
    </div>
  );
}

export default App;
