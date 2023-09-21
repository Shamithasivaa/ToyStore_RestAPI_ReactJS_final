package com.example.toystore.model;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Customer {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int customerId;
	private String customerName;
	private long phoneNumber;
	private String address;
	private String orderToy;
	private LocalDate orderDate;
	private LocalDate lendingStartDate;
	private LocalDate lendingEndDate;
	public Customer() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Customer(int customerId, String customerName, long phoneNumber, String address, String orderToy,
			LocalDate orderDate, LocalDate lendingStartDate, LocalDate lendingEndDate) {
		super();
		this.customerId = customerId;
		this.customerName = customerName;
		this.phoneNumber = phoneNumber;
		this.address = address;
		this.orderToy = orderToy;
		this.orderDate = orderDate;
		this.lendingStartDate = lendingStartDate;
		this.lendingEndDate = lendingEndDate;
	}
	public int getCustomerId() {
		return customerId;
	}
	public void setCustomerId(int customerId) {
		this.customerId = customerId;
	}
	public String getCustomerName() {
		return customerName;
	}
	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}
	public long getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(long phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getOrderToy() {
		return orderToy;
	}
	public void setOrderToy(String orderToy) {
		this.orderToy = orderToy;
	}
	public LocalDate getOrderDate() {
		return orderDate;
	}
	public void setOrderDate(LocalDate orderDate) {
		this.orderDate = orderDate;
	}
	public LocalDate getLendingStartDate() {
		return lendingStartDate;
	}
	public void setLendingStartDate(LocalDate lendingStartDate) {
		this.lendingStartDate = lendingStartDate;
	}
	public LocalDate getLendingEndDate() {
		return lendingEndDate;
	}
	public void setLendingEndDate(LocalDate lendingEndDate) {
		this.lendingEndDate = lendingEndDate;
	}
	
	
}
