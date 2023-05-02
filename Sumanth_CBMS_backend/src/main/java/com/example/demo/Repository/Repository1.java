package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.ORM.Customer;

@Repository
public interface Repository1 extends JpaRepository<Customer, Long> {
}
