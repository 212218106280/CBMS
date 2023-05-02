import axios from "axios";
import React, {useEffect,useState} from 'react';
import {Link,useParams} from 'react-router-dom';

const CustomerView=()=> {
    
    const [customer, setCustomer] =useState({
        name:"",
        address:"",
        phone:"",
        email:"",
        dateofBirth:""
  })

  const {id}=useParams();

    useEffect(()=>{
        loadcustomer()

    },[])

    const loadcustomer=async()=>{
       const result=await axios.get(`http://localhost:8080/api/Cus/${id}`)
       setCustomer(result.data)
        
    };
    
  return (
    <f5>
    <div className='container'>
    <div className='row'>
    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
        <h2 className="text-center m-4">Customer Details</h2>

        <div className="card">
            <div classname="card-header">
                Details of Customer id:{customer.id}
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>name:</b>
                        {customer.name}
                    </li>
                    <li className="list-group-item">
                        <b>address:</b>
                        {customer.address}
                    </li>
                    <li className="list-group-item">
                        <b>phone:</b>
                        {customer.phone}
                    </li>
                    <li className="list-group-item">
                        <b>email:</b>
                        {customer.email}
                    </li>
                    <li className="list-group-item">
                        <b>dateofBirth:</b>
                        {customer.dateofBirth}
                    </li>

                </ul>
            </div>
          
        </div>
        <Link className="btn btn-primary my-2" to={"/"}>Back to Home</Link>
    </div>
    </div>
    </div>
    </f5>
  );
}

export default CustomerView;