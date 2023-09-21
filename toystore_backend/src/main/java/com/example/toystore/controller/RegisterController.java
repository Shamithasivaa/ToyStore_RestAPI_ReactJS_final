package com.example.toystore.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.toystore.model.Register;
import com.example.toystore.service.RegisterService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/reg")
public class RegisterController {
	@Autowired
	private RegisterService registerService;
	@PostMapping("/register")
	@ResponseStatus(HttpStatus.CREATED)
    public Register createUser(@RequestBody Register user) {
        return registerService.createUser(user);
    }

    @GetMapping("/getregister")
    public List<Register> getAllUsers() {
        return registerService.getAllUsers();
    }

    @GetMapping("getregbyid/{id}")
    public Register getUserById(@PathVariable Long id) {
        return registerService.getUserById(id);
    }

    @PutMapping("updatereg/{id}")
    public Register updateUser(@PathVariable Long id, @RequestBody Register user) {
        user.setId(id);
        return registerService.updateUser(user);
    }

    @DeleteMapping("deletereg/{id}")
    public void deleteUserById(@PathVariable Long id) {
        registerService.deleteUserById(id);
    }

}
