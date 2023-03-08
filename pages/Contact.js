import React, { Component } from 'react';
import "../styles/Contact.css";
import axios from 'axios'

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
        id:'',
        email:'',
        name: '',
        phno: '',
        pwd:''
    };
  }

  handleIdChange = (event) => {
    this.setState({ id: event.target.value });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handlePhoneChange = (event) => {
    this.setState({ phno: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ pwd: event.target.value });
  };

  

  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
        id: this.state.id,
        email: this.state.email,
        name: this.state.name,
        phno: this.state.phno,
        pwd: this.state.pwd,
        
      };
    
      axios.post('http://127.0.0.1:8080/add', data)
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="sign-form">
      <br></br><br></br>

        <label className="sign-label">Id: </label>
        <input
          className="sign-input"
          type="text"
          value={this.state.id}
          onChange={this.handleIdChange}
        />
        <br></br><br></br>

        <label className="sign-label">Email: </label>
        <input
          className="sign-input"
          type="email"
          value={this.state.email}
          onChange={this.handleEmailChange}
        />
        <br></br><br></br>

        <label className="sign-label">Name: </label>
        <input
          className="sign-input"
          type="text"
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <br></br><br></br>

        <label className="login-label">Phone no: </label>
        <input
          className="login-input"
          type="number"
          value={this.state.phno}
          onChange={this.handlePhoneChange}
        />
        <br></br><br></br>

        <label className="sign-label">Password: </label>
        <input
          className="sign-input"
          type="password"
          value={this.state.pwd}
          onChange={this.handlePasswordChange}
        />
        <br></br><br></br>

        <button className="login-button" type="submit">
          Sign Up
        </button>
        <br></br><br></br>
        <br></br><br></br>
        <br></br><br></br>
        <br></br><br></br>
        <br></br><br></br>
        <br></br><br></br>

      </form>
     

    );
  }
}

export default Contact;









// import React from "react";
// import PizzaLeft from "../assets/pizzaLeft.jpg";
// import "../styles/Contact.css";

// function Contact() {
//   return (
//     <div className="contact">
//       <div
//         className="leftSide"
//         style={{ backgroundImage: `url(${"https://i.pinimg.com/originals/33/3b/d4/333bd4ea795b977c9960d67ef249ef27.jpg"})` }}
//       ></div>
//       <div className="rightSide">
//         <h1> Login</h1>

//         <form id="contact-form" method="POST">
//           <label htmlFor="name">Full Name</label>
//           <input name="name" placeholder="Enter full name..." type="text" />
//           <label htmlFor="email">Email</label>
//           <input name="email" placeholder="Enter email..." type="email" />
//           <label htmlFor="message">Message</label>
//           <textarea
//             rows="6"
//             placeholder="Enter message..."
//             name="message"
//             required
//           ></textarea>
//           <button type="submit"> Send Message</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Contact;




// import React from 'react';
// import TextField from '@mui/material/TextField';
// import "../styles/Contact.css";
// import {
//   Button,
//   Radio,
//   RadioGroup,
//   FormControlLabel,
//   FormControl,
//   FormLabel,
//   FormHelperText,
//   FormGroup,
//   Checkbox,
// } from '@mui/material';
// import { useForm } from "react-hook-form";

// const Contact = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm();
  
//   const onSubmit = (data) => console.log(data)

//   return (
//     //<div className='body_bg'>
//     <div className="App__form">
//       <h1>Sign Up</h1>
//       <form onSubmit={handleSubmit(onSubmit)}>
//       <TextField 
//       name="Id" 
//       label="Id" 
//       placeholder="Enter your Id"
//       variant="outlined"
//       fullWidth 
//       {...register("Id", { required: "Id is required.", pattern: {
//         value: /^^[\w\s-]+$$/,
//         message: 'Id should not contain special characters',
//       }
//     })}
//       error={Boolean(errors.firstName)}
//       helperText={errors.firstName?.message}
//     /><br></br><br></br>
//         <TextField 
//           name="firstName" 
//           label="First Name" 
//           placeholder="Enter your First Name"
//           variant="outlined"
//           fullWidth 
//           {...register("firstName", { required: "First Name is required.", pattern: {
//             value: /^^[\w\s-]+$$/,
//             message: 'First Name should not contain special characters',
//           }
//         })}
//           error={Boolean(errors.firstName)}
//           helperText={errors.firstName?.message}
//         /><br></br><br></br>
//         <TextField 
//           label="Last Name"
//           placeholder="Enter your Last Name"
//           variant="outlined"
//           fullWidth
//           name="lastName"
//           {...register("lastName", { required: "Last Name is required." })}
//           error={Boolean(errors.lastName)}
//           helperText={errors.lastName?.message}
//         /><br></br><br></br>
//         <TextField
//           label="E-mail"
//           placeholder="Enter your E-mail ID"
//           variant="outlined"
//           fullWidth
//           name="email"
//           {...register("email", { required: "E-mail Address is required.", pattern: {
//             value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
//             message: 'Please enter a valid email',
//         } })}
//           error={Boolean(errors.email)}
//           helperText={errors.email?.message}
//         /><br></br><br></br>
//         <TextField
//           label="Password"
//           placeholder="Enter your password"
//           variant="outlined"
//           fullWidth
//           name="password"
//           {...register("password", { required: "Set Password to proceed", pattern: {
//             value: /^(?=.[a-z])(?=.[A-Z])(?=.*[0-9])(?=.[!@#$%^&])(?=.{8,})$/,
//             message: 'Your password must contain 8 characters, 1 lowercase, 1 uppercase, 1 numeric, 1 special character',
//         } })}
//           error={Boolean(errors.password)}
//           helperText={errors.password?.message}
//         /><br></br><br></br>
// {/* Radio button */}
//         <FormControl error={Boolean(errors.gender)} >
//           <FormLabel component="legend"> Choose Your Gender </FormLabel>
//           <RadioGroup row aria-label="gender" name="gender">
//             <FormControlLabel 
//               value="female" 
//               control={
//                 <Radio {...register("gender", { required: "Choose your gender" })} />
//               } 
//               label="Female"
//              />
//             <FormControlLabel 
//               value="male" 
//               control={
//                 <Radio {...register("gender", { required: "Choose your gender" })} />
//               } 
//               label="Male" 
//               />
//             <FormControlLabel 
//               value="other" 
//               control={
//                 <Radio {...register("gender", { required: "Choose your gender" })} />
//               } 
//               label="Other" 
//             />
            
//           </RadioGroup>
//           <FormHelperText style={{color:'#d32f2f'}}>{errors.gender?.message}</FormHelperText>
//         </FormControl>
//         <div className="clearfix"></div>
// {/* Check box */}
//         <FormGroup 
//           error={Boolean(errors.tnc)}
//           style={{ display: "block", marginTop: "17px" }}
//         >
//           <FormControlLabel 
//             control={
//               <Checkbox  name="tnc" {...register("tnc", { required: "please agree to our terms and conditions" })} />
//             } 
//             label="I agree to all terms and conditions" 
//           />
//         </FormGroup>
//         <FormHelperText style={{color:'#d32f2f'}}>{errors.tnc?.message}</FormHelperText>
//         <div className="clearfix"></div><br></br>
//         <Button variant="contained" color="primary" type="submit" className="btns">
//             create new account
//           </Button>
//       </form>
//     </div>
//     //</div>
//   )
// }


// export default Contact;














