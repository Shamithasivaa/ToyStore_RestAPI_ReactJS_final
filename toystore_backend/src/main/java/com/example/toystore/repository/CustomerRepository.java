package com.example.toystore.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.toystore.model.Customer;
public interface CustomerRepository extends JpaRepository<Customer,Integer>{
	
}
