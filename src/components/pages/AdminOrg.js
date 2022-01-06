import "./AdminOrg.css";
import React, { Component } from 'react';
import axios from 'axios';
import Navbar from "../Navbar";

export default class Organization extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeNumber = this.onChangeNumber.bind(this);
    this.onChangeFax = this.onChangeFax.bind(this);
    this.onChangeWebsite = this.onChangeWebsite.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      orgname: '',
      address: '',
      number: '',
      fax: '',
      website : '',
      orgsList: []
    }
  }

  onChangeName(e) {
    this.setState({
      orgname: e.target.value
    })
  }

  onChangeAddress(e) {
    this.setState({
      address: e.target.value
    })
  }

  onChangeFax(e) {
    this.setState({
      fax: e.target.value
    })
  }

  onChangeNumber(e) {
    this.setState({
      number: e.target.value
    })
  }

  onChangeWebsite(e) {
    this.setState({
      website: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const org = {
      orgname: this.state.orgname,
      address: this.state.address,
      number: this.state.number,
      fax: this.state.fax,
      website: this.state.website,
    }

    console.log(org);

    axios.post('http://localhost:5000/org/add', org)
      .then(res => console.log(res.data));

    window.location = '/adminorg';
  }

  componentDidMount = () => {
    this.getBlogPost();
  };

  getBlogPost = () => {
    axios.get('http://localhost:5000/org')
      .then((response) => {
        const data = response.data;
        this.setState({ orgsList: data });
        console.log('Data has been received!!');
      })
      .catch(() => {
        alert('Error retrieving data!!!');
      });
  }
  
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  render() {
  return (
    <>
    <Navbar/>
    <video src='/videos/video-5.mp4' autoPlay loop muted />
    <div className="container">
        <div className="settingsTitle">
        </div>
        <form className="settingsForm" onSubmit={this.onSubmit}>
          <label>Organization Name</label>
          <input type="text" placeholder="Name" name="orgname" value={this.state.orgname} onChange={this.onChangeName}/>
          <label>Address</label>
          <input type="text" placeholder="Address" name="address" value={this.state.address} onChange={this.onChangeAddress} />
          <label>Number</label>
          <input type="tel" className ="number"  placeholder = "Phone Number" value={this.state.number} onChange = {this.onChangeNumber} />
          <label>Fax</label>
          <input placeholder="Fax" value={this.state.fax} onChange={this.onChangeFax}/>
          <label>Website</label>
          <input type="url" placeholder="Website" value={this.state.website} onChange={this.onChangeWebsite}/>
          <button className="settingsSubmitButton" type="submit">
          SEND
        </button>
        </form>
      </div>
    </>
  )
  }
}