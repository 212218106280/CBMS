import React,{useEffect, useState}from 'react';
import axios from "axios";
import '../App.css';
import { Link,useNavigate}from "react-router-dom";

 const Bankaccountform=()=> {

const [cus,setCus] = useState("");

  let navigate=useNavigate()
  const[Bankaccount,setBankaccount]=useState({

    customer:{
      address:"",
      dateofBirth:"",
      email:"",
      id:"",
      name:"",
      phone:"",
    },
    accountType:"",
    accountNumber:"",
    balance:"",
    Customername:"",
    Customerid:""
 }) 
 const[customerx, setCustomer] = useState([
  {
    id:"",
    name:"",
  }
 ])

useEffect(()=>{
const respose = async()=>{
const res= await axios.get("http://localhost:8080/api/Cus");
setCustomer(res.data);
}
respose();
 },[])

 const handleSelect =(e)=>{
  const cusSelect = customerx.find((i)=>i.name === e.target.value);
  const newData={...Bankaccount};
  newData.customer.id = cusSelect.id;
  setCus(e.target.value);
  setBankaccount(newData);
 }

 const{ accountType,accountNumber,balance,}=Bankaccount
 const onInputChange=(e)=>{
  
const inputName=e.target.name;
const inputValue=e.target.value;
if (inputName === 'accountNumber') {
  const isValid = /^[a-zA-Z0-9]+$/.test(inputValue);
  if (!isValid) {
    alert('Invalid account number format. Account number must be a combination of letters and numbers only.');
    return;
  }
}

setBankaccount({...Bankaccount,[inputName]:inputValue})
}

 

 const onSubmit=async(e)=>{
  e.preventDefault();
  await axios.post("http://localhost:8080/api/Acc",Bankaccount)
  navigate("/bank");

 };

  return (
    <div  className="border border-secondary">
      <v1>
        <h2>AddBankaccount </h2>
        <form id="f2" onSubmit={(e)=>onSubmit(e)}>
            <div className="row">
                <div className="form-group col-md-2">

                          
                
                <div >
                <label htmlFor="accountType">Customer:</label>
                <select value={cus} onChange={handleSelect}>
                  <option>--customer--</option>

                  {
                   customerx.map((x)=>{
                      return <option value={x.name} key={x.id}>{x.name}</option>

                    })
                  }
                </select>
                </div>

                
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

            


                </div>

            </div>
            <button type="Submit" className="btn btn-outline-primary">Submit</button>
            <Link type="Submit" className="btn btn-outline-danger mx-2" to="/bank">Cancel</Link>


        </form>
        </v1>
    </div>
  )
                }
  

export default Bankaccountform;