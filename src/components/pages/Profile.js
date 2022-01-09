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
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      first_name: '',
      last_name: '',
      city: '',
      street: '',
      country : '',
      email: '',
      profileslist: []
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

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
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
      email: this.state.email,
    }

    console.log(profile);

    axios.post('http://localhost:5000/profiles/add', profile)
      .then(res => console.log(res.data));

    window.location = '/prof';
  }

  componentDidMount = () => {
    this.getBlogPost();
  };


  getBlogPost = () => {
    axios.get('http://localhost:5000/profiles')
      .then((response) => {
        const data = response.data;
        this.setState({ profileslist: data });
        console.log('Data has been received!!');
      })
      .catch(() => {
        alert('Error retrieving data!!!');
      });
  }

  displayBlogPost = (profileslist) => {
    if (!profileslist.length) return null;
    function findindex(name){
      for(var i=0; i < profileslist.length; i++){
        if(profileslist[i].first_name === name){
          return i;
        }
      }
      return 0;
    }
    return (
      <div className="boxfinal">
        <h3>First Name:</h3>
        <label>{profileslist[findindex("Elio Naoum")].first_name}</label>
        <h3>Last Name:</h3>
        <label>{profileslist[findindex("Elio Naoum")].last_name}</label>
        <h3>Street:</h3>
        <label>{profileslist[findindex("Elio Naoum")].street}</label>
        <h3> City:</h3>
        <label>{profileslist[findindex("Elio Naoum")].city}</label>
        <h3> Country:</h3>
        <label>{profileslist[findindex("Elio Naoum")].country}</label>
        <h3> Email:</h3>
        <label>{profileslist[findindex("Elio Naoum")].email}</label>
      </div>
    )
  };
  
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  render() {
  return (
    <>
    <Navbar/>
    <video src='/videos/video-4.mp4' autoPlay loop muted />
    <div className="container">
        <div className="settingsTitle">
        </div>
        <form className="settingsForm" onSubmit={this.onSubmit}>
          <label>First Name</label>
          <input type="text" placeholder="First Name" name="fname" value={this.state.first_name} onChange={this.onChangeFirstName}/>
          <label>Last Name</label>
          <input type="text" placeholder="Last Name" name="lname" value={this.state.last_name} onChange={this.onChangeLastName} />
          <label>Street</label>
          <input type="street" className="form-control" id="autocomplete" placeholder="Street" value={this.state.street} onChange={this.onChangeStreet}/>
          <label>City</label>
          <input type="city" className="form-control" id="inputCity" placeholder="City" value={this.state.city} onChange={this.onChangeCity}/>
          <label>Country</label>
          <input type="country" className="form-control" id="inputCountry" placeholder="Country" value={this.state.country} onChange={this.onChangeCountry}/>
          <label>Email</label>
          <input type="email" className="form-control" id="inputEmail" placeholder="Email" value={this.state.email} onChange={this.onChangeEmail}/>
          <button className="settingsSubmitButton" type="submit">
          UPDATE
          </button>
          <div className="profile">
          {this.displayBlogPost(this.state.profileslist)}
          </div>
        </form>
      </div>
    </>
  )
  }
}