import "./Profile.css";
import {google} from 'react-google-maps';
import Navbar from "../Navbar";

var placeSearch, autocomplete;

var componentForm = {
  autocomplete: ['street_number', 'route'],
  inputCity: 'locality',
  inputState: 'administrative_area_level_1',
  inputZip: 'postal_code',
  inputCounty: 'administrative_area_level_2',
  inputCountry: 'country'
};

function initAutocomplete() {
  autocomplete = new google.maps.places.Autocomplete(
      /** @type {!HTMLInputElement} */ (document.getElementById('autocomplete')),
      {type: ['geocode']});
  autocomplete.addListener('place_changed', fillInAddress);
}

function fillInAddress() {
  var place = autocomplete.getPlace();
  console.log(place);
  for (var component in componentForm) {
    document.getElementById(component).disabled = false;
    document.getElementById(component).value = search(componentForm[component], place.address_components);
  }

  if (search("street_number", place.address_components) != "") {
    document.getElementById("autocomplete").value = search("street_number", place.address_components) + " ";
  }
  document.getElementById("autocomplete").value += search("route", place.address_components);
  
  function search(type, placeObject) {
    for (var i = 0; i < placeObject.length; i++) {
      if (placeObject[i].types[0] === type) {
        return placeObject[i].short_name;
      } else if (i === placeObject.length - 1) {
        return "";
      }
    }
  }
}

export default function Profile() {
  return (
    <>
    <Navbar/>
    <div className="profile">
      <video src='/videos/video-4.mp4' autoPlay loop muted />
      <div className="settingsWrapper">
        <div className="settingsTitle">
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://t4.ftcdn.net/jpg/02/15/84/43/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fas fa-pen"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <label>First Name</label>
          <input type="text" placeholder="First Name" name="fname" />
          <label>Last Name</label>
          <input type="text" placeholder="Last Name" name="lname" />
          <label>Street</label>
          <input type="street" class="form-control" id="autocomplete" placeholder="Street"/>
          <label>City</label>
          <input type="city" class="form-control" id="inputCity" placeholder="City"/>
          <label>Country</label>
          <input type="country" class="form-control" id="inputCountry" placeholder="Country"/>
        </form>
        <button className="settingsSubmitButton" type="submit">
          UPDATE
        </button>
      </div>
    </div>
    </>
  );
}