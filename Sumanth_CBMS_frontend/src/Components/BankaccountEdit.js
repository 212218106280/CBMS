import React,{useState,useEffect}from 'react';
import axios from "axios";

import { Link,useNavigate,useParams}from "react-router-dom";

 const BankaccountEdit=()=> {

  let navigate=useNavigate();

  const {id}=useParams()
  const[Bankaccount,setBankaccount]=useState({
    accountType:"",
    accountNumber:"",
    balance:"",
    Customername:"",
    Customerid:""
 }) 
 const{ accountType,accountNumber,balance, Customername,  Customerid}=Bankaccount
 const onInputChange=(e)=>{
  setBankaccount({...Bankaccount,[e.target.name]:e.target.value})

 };

 useEffect(()=>{
    loadBankaccount();
 },[])

 const onSubmit=async(e)=>{
  e.preventDefault();
  await axios.put(`http://localhost:8080/api/Acc/${id}`,Bankaccount)
  navigate("/bank");

 };

 const loadBankaccount=async()=>{
    const result=await axios.get(`http://localhost:8080/api/Acc/${id}`)
    setBankaccount(result.data)
 }

  return (
    <div  className="border border-secondary">
        <h2>EditBankaccount</h2>
        <form id="f2" onSubmit={(e)=>onSubmit(e)}>
            <div className="row">
                <div className="form-group col-md-2">
                <div >
                <label htmlFor="accountType">AccountType:</label>
                <input type="text" className="form-control" name="accountType" value={accountType} onChange={(e)=>onInputChange(e)} />
                </div>
                <div >
                <label htmlFor="accountNumber">AccountNumber:</label>
                
                <input type="text" className="form-control" name="accountNumber" value={accountNumber} onChange={(e)=>onInputChange(e)}/>
                </div>
                <div >
                <label htmlFor="balance">Balance:</label>
                <input type="text" className="form-control" name="balance" value={balance} onChange={(e)=>onInputChange(e)} />
                </div>
                <div >
                <label htmlFor="balance">CustomerName:</label>
                <input type="text" className="form-control" name="Customername" value={Customername} onChange={(e)=>onInputChange(e)} />
                </div>
                <div >
                <label htmlFor="balance">CustomerId:</label>
                <input type="text" className="form-control" name="Customerid" value={Customerid} onChange={(e)=>onInputChange(e)} />
                </div>


                </div>

            </div>
            <button type="Submit" className="btn btn-outline-primary">Submit</button>
            <Link type="Submit" className="btn btn-outline-danger mx-2" to="/bank">Cancel</Link>


        </form>
    </div>
  )
}

export default BankaccountEdit;