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
import com.example.demo.ORM.Bankaccount;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")

public class BankaccountController {
	@Autowired
    private Repository2 repo2;

    @GetMapping("/Acc")
    public List<Bankaccount> getAllStates(){
    	return repo2.findAll();
    }
    
    @GetMapping("/Acc/{id}")
    public ResponseEntity<Bankaccount> getStateById(@PathVariable Long id) {
    	Bankaccount Acc = repo2.findById(id).
    			orElseThrow(()-> new Notfoundexeception("Bacunt number : "+id+" not exists" ));
    	return ResponseEntity.ok(Acc);
    }
    
    @PostMapping("/Acc")
    public Bankaccount create(@RequestBody Bankaccount Acc) {
        return repo2.save(Acc);
    }
    
    @PutMapping("/Acc/{id}")
    public ResponseEntity<Bankaccount> updateAcc(@PathVariable Long id, @RequestBody Bankaccount Acc){
		Bankaccount Bacunt = repo2.findById(id)
				.orElseThrow(() -> new Notfoundexeception("Bacunt number : "+id+" not exists"));
		
	    Bacunt.setCustomer(Acc.getCustomer());
		Bacunt.setAccountType(Acc.getAccountType());
		Bacunt.setAccountNumber(Acc.getAccountNumber());
		Bacunt.setBalance(Acc.getBalance());
		
		
		Bankaccount updatedAcc = repo2.save(Bacunt);
		return ResponseEntity.ok(updatedAcc);
	}
    
    @DeleteMapping("/Acc/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteAcc(@PathVariable Long id){
    	Bankaccount Bacunt = repo2.findById(id)
				.orElseThrow(() -> new Notfoundexeception("user with id : "+id+" has been deleted success."));
		
		repo2.delete(Bacunt);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}

