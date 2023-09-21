package com.example.toystore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.toystore.model.Register;

public interface RegisterRepository extends JpaRepository<Register, Long>{

}
