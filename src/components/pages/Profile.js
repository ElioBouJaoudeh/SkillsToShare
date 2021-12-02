import "./Profile.css";
import {google} from 'react-google-maps';
import React, { Component } from 'react';
import axios from 'axios';
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

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeStreet = this.onChangeStreet.bind(this);
    this.onChangeCountry = this.onChangeCountry.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      first_name: '',
      last_name: '',
      city: '',
      street: '',
      country : ''
    }
  }

  onChangeFirstName(e) {
    this.setState({
      first_name: e.target.value
    })
  }

  onChangeLastName(e) {
    this.setState({
      last_name: e.target.value
    })
  }

  onChangeCity(e) {
    this.setState({
      city: e.target.value
    })
  }

  onChangeCountry(e) {
    this.setState({
      country: e.target.value
    })
  }

  onChangeStreet(e) {
    this.setState({
      street: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const profile = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      city: this.state.city,
      street: this.state.street,
      country: this.state.country,
    }

    console.log(profile);

    axios.post('http://localhost:5000/profiles/add', profile)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
  return (
    <>
    <Navbar/>
    <video src='/videos/video-4.mp4' autoPlay loop muted />
    <div className="container">
    <div className="profile">
        <div className="settingsTitle">
        </div>
        <form className="settingsForm" onSubmit={this.onSubmit}>
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
          <input type="text" placeholder="First Name" name="fname" value={this.state.first_name} onChange={this.onChangeFirstName}/>
          <label>Last Name</label>
          <input type="text" placeholder="Last Name" name="lname" value={this.state.last_name} onChange={this.onChangeLastName} />
          <label>Street</label>
          <input type="street" class="form-control" id="autocomplete" placeholder="Street" value={this.state.street} onChange={this.onChangeStreet}/>
          <label>City</label>
          <input type="city" class="form-control" id="inputCity" placeholder="City" value={this.state.city} onChange={this.onChangeCity}/>
          <label>Country</label>
          <input type="country" class="form-control" id="inputCountry" placeholder="Country" value={this.state.country} onChange={this.onChangeCountry}/>
          <button className="settingsSubmitButton" type="submit">
          UPDATE
        </button>
        </form>
      </div>
      </div>
    </>
  )
  }
}