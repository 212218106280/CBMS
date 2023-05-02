import axios from "axios";
import React,{useState} from "react";
import '../App.css';
import { Link , useNavigate} from "react-router-dom";




   const Customerform=()=>{

    let navigate=useNavigate()
    const [Customer,setCustomer]=useState({
        name:"",
        address:"",
        phone:"",
        email:"",
        dateofBirth:"",
        title:""
    
    })
    const {name, address, phone, email, dateofBirth,title}=Customer

    const onInputChange=(e)=>{
        setCustomer({...Customer,[e.target.name]:e.target.value})

    };
    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/api/Cus",Customer)
        navigate("/");
    }
    return(
        <div className="border border-secondary">
            <h2>AddCustomer</h2>
              <form id='f1' onSubmit={(e) => onSubmit(e)}>
             <div className="row">
                <div className="form-group col-md-2">
              
                    <label htmlFor="title">Title</label>
                    <select  className="form-control" name="title" value={title} onChange={(e)=>onInputChange(e)} >
                        <option>MR</option>
                        <option>MRS</option>
                        <option>MS</option>
        

                    </select>

                </div>
                <div >
                <label htmlFor="name">Name:</label>
                <input type="text" className="form-control" name="name" value={name}onChange={(e)=>onInputChange(e)} required/>
                </div>
                <div >
                <label htmlFor="address">Address:</label>
                <input type="text" className="form-control" name="address" value={address} onChange={(e)=>onInputChange(e)} required/>
                </div>
                <div >
                <label htmlFor="phone">Phone:</label>
                <input type="text" className="form-control" name="phone" value={phone} requiredpattern='^{0-9}$' maxlength="10" onChange={(e)=>onInputChange(e)} required/>
               
                </div>
                <div>
                <label htmlFor="email">Email:</label>
                <input type="email" className="form-control" name="email" value={email} onChange={(e)=>onInputChange(e)} required/>
               
                </div>
                <div >
                <label htmlFor="dateofBirth">DateofBirth:</label>
                <input type="date" className="form-control" name="dateofBirth" value={dateofBirth}onChange={(e)=>onInputChange(e)} required />
                </div>

            </div>
              <button type="Submit" className="btn btn-outline-primary">Submit</button>
        <Link  className="btn btn-outline-danger mx-2" to="/">cancel</Link>
            
        </form>
        
      
        </div>
        
        
        
        
        
        
    );
    } 
    



export default Customerform;