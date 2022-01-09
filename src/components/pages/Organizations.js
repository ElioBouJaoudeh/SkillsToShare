import React, { Component } from 'react';
import axios from 'axios';
import "./Org.css"

export default class ShowOrg extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orgname: '',
      address: '',
      number: '',
      fax: '',
      website : '',
      orgsList: []
    }
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  componentDidMount() {
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
  
  render() {
    const showOrganizations=this.state.orgsList.map(org => (
      <div key={org._id} className='boxorg'>
     <p>{org.orgname}</p>
      <p>{org.address}</p>
      <p>{org.number}</p>
      <p>{org.fax}</p>
      <p>{org.website}</p>
      </div>
    ));

    return (
      <div className="container">
        {showOrganizations}
      </div>
    );
  }
}