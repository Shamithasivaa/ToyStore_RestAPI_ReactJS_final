package com.example.toystore.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.toystore.model.Customer;
import com.example.toystore.repository.CustomerRepository;


@Service
public class CustomerService {
	@Autowired
	private CustomerRepository customerRepository;
	public Customer add(Customer customer) {
		
		return customerRepository.save(customer);
	}

	public List<Customer> addCustomers(List<Customer> customer) {
		
		return customerRepository.saveAll(customer);
	}

	public List<Customer> showCustomers() {
		
		return customerRepository.findAll();
	}
	
	public List<Customer> pagination(int pageNo, int pageSize) {
		// TODO Auto-generated method stub
		Page<Customer> page=customerRepository.findAll(PageRequest.of(pageNo, pageSize));
		return page.getContent();
	}

	public List<Customer> sorting(int pageNo, int pageSize, String field) {
		Page<Customer> page=customerRepository.findAll(PageRequest.of(pageNo, pageSize,Sort.by(field)));
		return page.getContent();
	}

	public List<Customer> updateCustomer(List <Customer> customer) {
		
		return customerRepository.saveAllAndFlush(customer);
	}

	public void deleteCustomer(Customer customer) {
		
		customerRepository.delete(customer);
		//return "Deleted successfully";		
	}

	public void deleteById(int id) {
		
		customerRepository.deleteById(id);
	}
	
}
