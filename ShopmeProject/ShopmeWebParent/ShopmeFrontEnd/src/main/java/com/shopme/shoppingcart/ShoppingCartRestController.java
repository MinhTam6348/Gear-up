package com.shopme.shoppingcart;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;


import com.shopme.common.entity.Customer;
import com.shopme.common.exception.CustomerNotFoundException;
import com.shopme.customer.CustomerService;

@RestController
public class ShoppingCartRestController {
	@Autowired private ShoppingCartService cartService;
	
	@PostMapping("/cart/add/{productId}/{quantity}/{customerId}")
	public String addProductToCart(@PathVariable("productId") Integer productId,
			@PathVariable("quantity") Integer quantity, 
			@PathVariable("customerId") Customer customerId) {
		
		cartService.addProduct(productId, quantity, customerId);
		
		return "";
		
	}
	
//	@PostMapping("/cart/update/{productId}/{quantity}")
//	public String updateQuantity(@PathVariable("productId") Integer productId,
//			@PathVariable("quantity") Integer quantity, HttpServletRequest request) {
//		try {
//			Customer customer = getAuthenticatedCustomer(request);
//			float subtotal = cartService.updateQuantity(productId, quantity, customer);
//			
//			return String.valueOf(subtotal);
//		} catch (CustomerNotFoundException ex) {
//			return "You must login to change quantity of product.";
//		}	
//	}
//	
//	@DeleteMapping("/cart/remove/{productId}")
//	public String removeProduct(@PathVariable("productId") Integer productId,
//			HttpServletRequest request) {
//		try {
//			Customer customer = getAuthenticatedCustomer(request);
//			cartService.removeProduct(productId, customer);
//			
//			return "The product has been removed from your shopping cart.";
//			
//		} catch (CustomerNotFoundException e) {
//			return "You must login to remove product.";
//		}
//	}
}
