import axios from "axios";
import React, { Component } from "react";
import '../styles/getdet.css';

class Getdet extends Component {
  state = {
  data: []
  }

  componentDidMount() {
  axios.get('http://127.0.0.1:8080/show')
    .then(response => {
      this.setState({ data: response.data });
    })
    .catch(error => {
      console.log(error);
    });
}


  render() {   
    return (<div>

        <div className="fi">
      <table border={2}>
      <thead>
        <tr>
          <th>Id</th>
          <th>Email Id</th>
          <th>Name</th>
          <th>Phone Number</th>
          <th>Password</th>
          
         
          

        </tr>
      </thead>
      <tbody>
        {this.state.data.map(user => (
          <tr >
            
            <td>{user.id}</td>
            <td>{user.email}</td>
            <td>{user.name}</td>
            <td>{user.phno}</td>
            <td>{user.pwd}</td>
           
            
            
          </tr>
        ))}
      </tbody>
    </table>
    <button >delete</button>
    </div></div>
    
    );
  }}
  
export default Getdet;