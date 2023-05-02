import axios from "axios";
import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';

const BankaccountView = () => {
  const [bankAccount, setBankAccount] = useState({});
  const {id} = useParams();

  useEffect(() => {
    loadBankAccount();
  }, [id]);

  const loadBankAccount = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/api/Acc/${id}`);
      setBankAccount(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Bank Account Details</h2>

          <div className="card">
            <div className="card-header">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>AccountNumber:</b> {bankAccount.accountNumber}
                </li>
                <li className="list-group-item">
                  <b>AccountType:</b> {bankAccount.accountType}
                </li>
                <li className="list-group-item">
                  <b>Balance:</b> {bankAccount.balance}
                </li>
                <li className="list-group-item">
                  <b>CustomerName:</b> {bankAccount.customer?.name}
                </li>
                <li className="list-group-item">
                  <b>CustomerId:</b> {bankAccount.customer?.id}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/bank"}>Back to Home</Link>
        </div>
      </div>
    </div>
  );
}

export default BankaccountView;
