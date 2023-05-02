package com.example.demo.ORM;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="Customer")
public class Customer {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long customer_id;
	
	@OneToMany(mappedBy ="customer",cascade = CascadeType.ALL)
	private List<Bankaccount> bankaccount;
	
	@Column(name="name")
	private String Name;
	@Column(name="address")
	private String Address;
	@Column(name="phone")
	private String Phone;
	@Column(name="email")
	private String Email;
	@Column(name="dateofBirth")
	private String DateofBirth;
	
	public Customer() {
		
	}

	public Customer( String Name, String Address, String Phone, String Email, String DateofBirth) {
		super();
		
		this.Name = Name;
		this.Address = Address;
		this.Phone = Phone;
		this.Email = Email;
		this.DateofBirth = DateofBirth;
	}
	public Long getId() {
		return customer_id;
	}
	public void setId(Long id) {
		this.customer_id = id;
	}
	public String getName() {
		return Name;
	}
	public void setName(String name) {
		this.Name = name;
	}
	public String getAddress() {
		return Address;
	}
	public void setAddress(String address) {
		Address = address;
	}
	public String getPhone() {
		return Phone;
	}
	public void setPhone(String phone) {
		Phone = phone;
	}
	public String getEmail() {
		return Email;
	}
	public void setEmail(String email) {
		Email = email;
	}
	public String getDateofBirth() {
		return DateofBirth;
	}
	public void setDateofBirth(String dateofBirth) {
		DateofBirth = dateofBirth;
	}
	
}

	