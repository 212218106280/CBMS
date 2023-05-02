package com.example.demo.Controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Repository.*;
import com.example.demo.Exception.*;
import com.example.demo.ORM.Customer;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class CustomerController {

	    @Autowired
	    private Repository1 repo1;

	    @GetMapping("/Cus")
	    public List<Customer> getAllCustomers(){
	    	return repo1.findAll();
	    }
	    
	    @GetMapping("/Cus/{id}")
	    public ResponseEntity<Customer> getStateById(@PathVariable Long id) {
	    	Customer Cus = repo1.findById(id).
	    			orElseThrow(()-> new Notfoundexeception("cust number : "+id+" not exists" ));
	    	return ResponseEntity.ok(Cus);
	    }
	    
	    @PostMapping("/Cus")
	    public Customer create(@RequestBody Customer Cus) {
	        return repo1.save(Cus);
	    }
	    
	    @PutMapping("/Cus/{id}")
	    public ResponseEntity<Customer> updateCus(@PathVariable Long id, @RequestBody Customer cus){
			Customer cust = repo1.findById(id)
					.orElseThrow(() -> new Notfoundexeception("cust number : "+id+" not exists"));
			
			cust.setId(cus.getId());
			cust.setName(cus.getName());
			cust.setAddress(cus.getAddress());
			cust.setDateofBirth(cus.getDateofBirth());
			cust.setPhone(cus.getPhone());
			cust.setEmail(cus.getEmail());
			
			
			Customer updatedCus = repo1.save(cust);
			return ResponseEntity.ok(updatedCus);
		}
	    
	    @DeleteMapping("/Cus/{id}")
	    public ResponseEntity<Map<String, Boolean>> deleteCus(@PathVariable Long id){
	    	Customer cust = repo1.findById(id)
					.orElseThrow(() -> new Notfoundexeception("user with id : "+id+" has been deleted success."));
			
			repo1.delete(cust);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
	}