package com.example.toystore.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.toystore.model.Toy;
public interface ToyRepository extends JpaRepository<Toy,Integer>{



}
