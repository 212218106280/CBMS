 package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.ORM.Bankaccount;

@Repository
public interface Repository2 extends JpaRepository<Bankaccount, Long> {
}

