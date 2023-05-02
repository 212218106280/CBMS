
import axios from "axios";
import React,{useEffect,useState} from "react";
import { Link,useNavigate,useParams} from "react-router-dom";
function Bankaccounttable() {
    const [Bankaccount, setBankaccount] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    
const nav = useNavigate();
    const { id } = useParams();
    useEffect(() => {
        loadBankaccount();

    }, [id]);
    const loadBankaccount = async () => {
        await axios.get("http://localhost:8080/api/Acc").then(res => setBankaccount(res.data));

    };

    const deleteBankaccount=async (id)=>{
        await axios.delete(`http://localhost:8080/api/Acc/${id}`)
        loadBankaccount();
    };

    const filterBankaccount=(bankAccounts,query)=>{
        if(!query){
            return bankAccounts;
        }
        return bankAccounts.filter((bankAccount)=>
        bankAccount.customer.name.toLowerCase().includes(query.toLowerCase())
        );
    };
    console.log(Bankaccount);
    const filteredBankaccount = filterBankaccount(Bankaccount, searchQuery);

    const tableData = filteredBankaccount.map((i)=>{
       
        return <>
        
        <tr>
            <td>{i.accountType}</td>
            <td>{i.accountNumber}</td>
            <td>{i.balance}</td>
            <td>{i.customer.name}</td>
            <td>{i.customer.id}</td>
            <td>
             <Link className="btn"  to={`/BankaccountView/${i.id}`}><i className="fa fa-eye" aria-hidden="true"></i></Link></td>
            <td>  <Link className="btn btn-outline-primary" to={`/BankaccountEdit/${i.id}`}> <i className="bi bi-pencil-fill" ></i>Edit</Link></td>
            <td>  <button className="btn btn-outline-danger mx-2 " onClick={()=> deleteBankaccount(i.id)}><i className="fa fa-trash" aria-hidden="true"></i></button></td>


        </tr>
        </>
    })
    return (
        <div>
          <button style={{position:"absolute", top:"5%",right:"12%"}} className="btn btn-outline-danger mx-2"  onClick={()=>nav('/Add')}>AddBankaccount</button>
          <input
  type="text"
  placeholder="Search by customer name..."
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
  style={{ backgroundColor: 'lightskyblue' }}
/>
            <table id="table" className="table table-striped">
                <thead>
                    <tr>
                       
                        <th>AccountType</th>
                        <th>AccountNumber</th>
                        <th>Balance</th>
                        <th>Customer Name</th>
                        <th>Customer Id</th>
                        <th>view</th>
                        <th>Edit</th>
                        <th>Delete</th>
                        
                    </tr>
                </thead>
                <tbody>

                    {tableData}
                  

                </tbody>
            </table>
        </div>
    );
}

export default Bankaccounttable;