package com.example.demo.ORM;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="Bankaccount")

public class Bankaccount {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@ManyToOne
	@JoinColumn(name="customer_id")             
	private Customer customer;
	
	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}
	@Column (name="AccountType")
	private String AccountType;
	
	@Column(name="AccountNumber")
	private long AccountNumber;
	
	@Column(name="Balance")
	private long Balance;	

//	public Bankaccount(Long id, Long customerId, String accountType, long accountNumber, long balance) {
//		super();
//		this.id = id;
//		this.AccountType = accountType;
//		this.AccountNumber = accountNumber;
//		this.Balance = balance;
//	}

	public Bankaccount() {
		
	}

	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	
	public String getAccountType() {
		return AccountType;
	}
	public void setAccountType(String accountType) {
		this.AccountType = accountType;
	}
	public long getAccountNumber() {
		return AccountNumber;
	}
	public void setAccountNumber(long accountNumber) {
		this.AccountNumber = accountNumber;
	}
	public long getBalance() {
		return Balance;
	}
	public void setBalance(long balance) {
		this.Balance = balance;
	}
}
