package com.example.toystore.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.toystore.model.Register;
import com.example.toystore.repository.RegisterRepository;

@Service
public class RegisterService {
	@Autowired
	private RegisterRepository registerRepository;
    // Create a new user
    public Register createUser(Register user) {
        return registerRepository.save(user);
    }

    // Read all users
    public List<Register> getAllUsers() {
        return registerRepository.findAll();
    }

    // Read a user by ID
    public Register getUserById(Long id) {
        return registerRepository.findById(id).orElse(null);
    }

    // Update a user
    public Register updateUser(Register user) {
        return registerRepository.save(user);
    }

    // Delete a user by ID
    public void deleteUserById(Long id) {
        registerRepository.deleteById(id);
    }

}
