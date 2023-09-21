package com.example.toystore.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.toystore.model.Toy;
import com.example.toystore.service.ToyService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/products")
public class ToyController {
	@Autowired
	ToyService toyService;
	
	@PostMapping("/add")
	@ResponseStatus(HttpStatus.CREATED)
	public Toy add(@RequestBody Toy toy) {
		return toyService.add(toy);
	}
	
	@PostMapping("/addlist")
	public List<Toy> addToys(@RequestBody List<Toy> toy){
		return toyService.addToys(toy);
	}
	
	@GetMapping("/show")
	public List<Toy> showToys() {
		return toyService.showToys();
	}
	
	@GetMapping("/pagination/{pageNo}/{pageSize}")
    public List<Toy> pagination(@PathVariable int pageNo,@PathVariable int pageSize){
		return toyService.pagination(pageNo, pageSize);
    }
	
    @GetMapping("sorting/{pageNo}/{pageSize}/{field}")
    public List<Toy> sorting(@PathVariable int pageNo,@PathVariable int pageSize,@PathVariable String field){
    	return toyService.sorting(pageNo, pageSize, field);
    	
    }
	
	@PutMapping("/update/{id}")
	public Toy updateToy(@RequestBody Toy toy) {
		return toyService.updateToy(toy);
	}
		
	@DeleteMapping("/delete")
	public String deleteToy(@RequestBody Toy toy){
		toyService.deleteToy(toy);
		return "deleted successfully";
	}
	
	 @DeleteMapping("/deletebyid/{id}")
	 public void deleteById(@PathVariable int id){
		toyService.deleteById(id);
	 }
}
