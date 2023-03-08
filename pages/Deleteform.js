import React from 'react';
import axios from 'axios';
import { useState} from 'react';

import '../styles/delete.css'
function Deleteform() {
    const [id, setId] = useState();
    const [error, setError] = useState('');
  
    function del() {
        // useEffect(() => {
        axios
            .delete('http://localhost:8080/Delete/' + id)
            .then((response) => {
                console.log(response.data);
                
            })
            .catch((error) => setError(error.message));
        alert("User Deleted");
    }
    return (
        <> <div className='App_form'> <center>
            <h2>Enter Your User Id to Cancel a Ticket</h2>
            <div><br></br><br></br><br></br>

                <input type="number" placeholder='Enter User ID' className="form-control1" value={id} onChange={(e) => setId(e.target.value)}>

                </input>
            </div>
            <br></br><br></br>
            <button type="submit" className="bud" onClick
                ={del}>Submit</button>
                </center>
                
                <br></br><br></br><br></br><br></br><br></br><br></br>
            <h2>
                {error}
            </h2>
            </div>
        </>
    );
}

export default Deleteform;