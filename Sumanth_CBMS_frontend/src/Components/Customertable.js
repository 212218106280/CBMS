import React,{useEffect,useState,useRef} from "react";


import axios from 'axios';
import {Link , useNavigate,useParams} from 'react-router-dom';
import jsPDF from "jspdf";
import "jspdf-autotable";





 const Customertable=()=>{
    const nav = useNavigate();
    const [customer,setCustomer]=useState([]);
    const [searchQuery,setSearchQuery]=useState('');

    const {id}=useParams()
    const tableRef = useRef();

    useEffect(()=>{
        loadcustomer();

    }, []);

    const loadcustomer=async()=>{
        await axios.get("http://localhost:8080/api/Cus").then(res=>setCustomer(res.data));
        
    };

    const deleteCustomer=async (id)=>{
        await axios.delete(`http://localhost:8080/api/Cus/${id}`)
        loadcustomer()
    }

    const navtoBank =()=>{
        nav("/bank")
    };

    const handleSearch =(event)=>{
        setSearchQuery(event.target.value);
    };

    const filteredcustomers = customer.filter((customer)=>
    customer.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    
  const generatePdf = () => {
    const unit = "pt";
    const size = "A4";
    const orientation = "landscape";
    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);
    doc.autoTable({html:'#my-table'});
    doc.save('my-table.pdf');
    doc.setFontSize(15);
    const title = "Customer Bank Management System";
    const headers = [["Name", "Address", "Phone", "Email", "DOB"]];
    const data = filteredcustomers.map((customer) => [
      customer.name,
      customer.address,
      customer.phone,
      customer.email,
      customer.dateofBirth,
    ]);
    let content = {
      startY: 50,
      head: headers,
      body: data,
    };
    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save("customer_table.pdf");
  };

    return(
        <body>
        <nav>
             <h1>Customer Bank Management System </h1>
             <Link style={{position:"absolute", top:"21%",right:"12%"}}  className="btn btn-outline-danger mx-2" to="/Customerform">AddCustomer</Link>
          
        <button style={{position:"absolute", top:"21%",left:"12%"}}className='btn btn-outline-danger mx-2' onClick={navtoBank}>Bank Details</button>
        <div>
            <input type="text" placeholder="Search customers by name" value={searchQuery} onChange={handleSearch} style={{backgroundColor:"gainsboro"}}></input>
            <button
            className="btn btn-outline-primary mx-2"
            onClick={generatePdf}
          >
            Export to PDF
          </button>
       
            
           
        <table id = "table" className="table table-striped" ref={tableRef}>
            <thead id="head">
                <tr>
                    
                    <th>name</th>
                    <th>address</th>
                    <th>phone</th>
                    <th>email</th>
                    <th>dateofBirth</th>
                    <th>View</th>
                    <th>Edit</th>
                    <th>Delete</th>
                    
                </tr>
            </thead>
            <tbody>
                    {
                      filteredcustomers.map((customer,index)=>(
                     <tr key={customer.id}>
                   
                 
                    <td>{customer.name}</td>
                    <td>{customer.address}</td>
                    <td>{customer.phone}</td>
                    <td>{customer.email}</td>
                    <td>{customer.dateofBirth}</td>
                    <td>
                        <Link className="" to={`/CustomerView/${customer.id}`}><i className="fa fa-eye" aria-hidden="true"></i></Link></td>
                      <td>  <Link className="btn btn-outline-primary " to={`/CustomerEdit/${customer.id}`}><i className="bi bi-pencil-fill" >Edit</i></Link></td>
                      <td>  <button className="btn btn-outline-danger mx-2"onClick={()=>deleteCustomer(customer.id)}><i className="fa fa-trash" aria-hidden="true"></i></button></td>
                        
        
                    
                    </tr>
                 
                  ))
                   }
                </tbody>
                
            
                
        
        </table>
       
        
        </div>
        </nav>
      
        <footer>Copyrights@....</footer>
        </body>
     
        
       
       
    )

}
export default Customertable;