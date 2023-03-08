import React, { useState} from "react";
import axios from "axios";
import '../styles/update.css'

function Update() {
  const [emp, setEmp] = useState({
    id: "",
    email: "",
    name: "",
    phno: "",
    pwd:"",

  });

  const handleChange = (event) => {
    setEmp({ ...emp, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:8080/Update`, emp).then((res) => {
      console.log(res.data);
      setEmp({ id: "", email: "",name: "",phno: "" ,pwd:""});
    });
  };

  return (
    <div className="App_form">
      
      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input type="number"className="id" name="id" placeholder="Enter your id" value={emp.id} onChange={handleChange} />
        </label><br/><br></br>
        <label>
          Email:
          <input type="email"  className="em" name="email" placeholder="Enter your mailid" value={emp.email} onChange={handleChange} />
        </label><br/><br></br>
        <label>
          Name:
          <input type="text" className="un" name="name"  placeholder="Enter your name" value={emp.name} onChange={handleChange} />
        </label><br/><br></br>
        <label>
          Phone Number:
          <input type="number" className="mb" name="phno" placeholder="Enter mobile number"value={emp.mobno} onChange={handleChange} />
        </label><br/><br></br>
        <label>
          Password:
          <input type="password" className="tr" name="pwd" placeholder="Enter password" value={emp.pwd} onChange={handleChange} />
        </label><br/><br></br>
        
        <button type="submit" className="up">Update</button><br></br><br></br>
        <h5>* User can Update details if they have registered for an event</h5>
      </form>
    </div>
  );
}

export default Update;