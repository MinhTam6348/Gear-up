package com.shopme.customer;

import java.util.Date;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.shopme.common.entity.Customer;

import net.bytebuddy.utility.RandomString;


@Service
public class CustomerService {

	@Autowired private CustomerRepository customerRepo;
	
	
	public boolean isEmailUnique(String email) {
		Customer customer = customerRepo.findByEmail(email);
		return customer == null;
	}
	
	public void registerCustomer(Customer customer) {
		
		customer.setEnabled(true);
		customer.setCreatedTime(new Date());
		
		
		customerRepo.save(customer);
		
	}
	
}
