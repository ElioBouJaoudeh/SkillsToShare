import React, { Component } from 'react';
import orgsList from './AdminOrg';
import axios from 'axios';

export default class ShowOrg extends Component {
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

    render(){
    for(var i=0; i < orgsList.length; i++){
        return(
            <div className="box">
            <h3>Organization Name:</h3>
            <label>{orgsList[i].orgname}</label>
            <h3>Address:</h3>
            <label>{orgsList[i].address}</label>
            <h3>Number:</h3>
            <label>{orgsList[i].number}</label>
            <h3> Fax:</h3>
            <label>{orgsList[i].fax}</label>
            <h3> Website:</h3>
            <label>{orgsList[i].website}</label>
          </div>
          );
        }
    }   
}
