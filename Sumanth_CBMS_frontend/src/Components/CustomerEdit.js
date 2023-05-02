import axios from "axios";
import React,{useState ,useEffect} from "react";
import { Link , useNavigate,useParams} from "react-router-dom";




   const CustomerEdit=()=>{

    let navigate=useNavigate()

    const {id}=useParams()
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

    useEffect(()=>{
        loadcustomer();
    }, [])
    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:8080/api/Cus/${id}`,Customer)
        navigate("/");
    };
     
    const loadcustomer=async ()=>{
        const result=await axios.get(`http://localhost:8080/api/Cus/${id}`)
        setCustomer(result.data)
    }

    return(
        <div className="border border-secondary p-3 my-3">
            <h3>EditCustomer</h3>
              <form id="f3" onSubmit={(e) => onSubmit(e)}>
            <div className="row">
                <div className="form-group col-md-2">
              
                    <label htmlFor="title">Title</label>
                    <select className="form-control" name="title" value={title} onChange={(e)=>onInputChange(e)} >
                        <option>MR</option>
                        <option>MRS</option>
                        <option>MS</option>
        

                    </select>

                </div>
                <div >
                <label htmlFor="name">Name:</label>
                <input type="text" className="form-control" name="name" value={name}onChange={(e)=>onInputChange(e)} />
                </div>
                <div >
                <label htmlFor="address">Address:</label>
                <input type="text" className="form-control" name="address" value={address} onChange={(e)=>onInputChange(e)}/>
                </div>
                <div >
                <label htmlFor="phone">Phone:</label>
                <input type="text" className="form-control" name="phone" value={phone} onChange={(e)=>onInputChange(e)}/>
                </div>
                <div>
                <label htmlFor="email">Email:</label>
                <input type="text" className="form-control" name="email" value={email} onChange={(e)=>onInputChange(e)}/>
                </div>
                <div >
                <label htmlFor="dateofBirth">Dateofbirth:</label>
                <input type="date" className="form-control" name="dateofBirth" value={dateofBirth}onChange={(e)=>onInputChange(e)} />
                </div>

            </div>
            <button type="Update" className="btn btn-outline-primary">Update</button>
            <Link  className="btn btn-outline-danger mx-2" to="/">cancel</Link>
            
        </form>
        </div>
        
        
        
        
    );
    } 
    



export default CustomerEdit;