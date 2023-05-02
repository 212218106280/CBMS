
import './App.css';
import Customerform from './Components/Customerform';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Customertable from './Components/Customertable';
import CustomerEdit from "./Components/CustomerEdit";
import CustomerView from "./Components/CustomerView";
import {BrowserRouter as Router,Routes, Route}from "react-router-dom";
import Bankaccounttable from "./Components/Bankaccounttable";
import Bankaccountform from "./Components/Bankaccountform";
import BankaccountEdit from './Components/BankaccountEdit';
import BankaccountView from './Components/BankaccountView';
// import Home from './Layout/Home'


const App=() =>{
return (
    <div className="App"> 
      <Routes>
       <Route exact path="/" element={<Customertable/>}/>
       <Route exact path="/Customerform" element={<Customerform/>}/>
       <Route exact path="/CustomerEdit/:id" element={<CustomerEdit/>}/>
       <Route exact path="/CustomerView/:id" element={<CustomerView/>}/>
       <Route path= "/bank" element= {<Bankaccounttable/>}/>
       <Route path= "/Add" element= {<Bankaccountform/>}/>
       <Route path= "/BankaccountEdit/:id" element= {<BankaccountEdit/>}/>
       <Route exact path="/BankaccountView/:id" element={<BankaccountView/>}/>
       {/* <Route exact path="/Bankaccountform" element={<Bankaccountform/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
