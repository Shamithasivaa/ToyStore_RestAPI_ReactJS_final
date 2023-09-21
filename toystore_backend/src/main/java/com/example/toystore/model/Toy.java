package com.example.toystore.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Toy {
	@Id
	private int id;
	private String toyName;
	private String description;
	private String category;
	private int availableQty;
	private long price;
	
	public Toy(int id, String toyName, String description, String category, int availableQty, long price) {
		super();
		this.id = id;
		this.toyName = toyName;
		this.description = description;
		this.category = category;
		this.availableQty = availableQty;
		this.price = price;
		}

		public Toy() {
			super();
			// TODO Auto-generated constructor stub
		}

		public int getId() {
			return id;
		}
		
		public void setId(int id) {
			this.id = id;
		}

		public String getToyName() {
			return toyName;
		}
		
		public void setToyName(String toyName) {
			this.toyName = toyName;
		}
		
		public String getDescription() {
			return description;
		}
		
		public void setDescription(String description) {
			this.description = description;
		}
		
		public String getCategory() {
			return category;
		}
		
		public void setCategory(String category) {
			this.category = category;
		}

		public int getAvailableQty() {
			return availableQty;
		}

		public void setAvailableQty(int availableQty) {
			this.availableQty = availableQty;
		}

		public long getPrice() {
			return price;
		}

		public void setPrice(long price) {
			this.price = price;
		}
}
