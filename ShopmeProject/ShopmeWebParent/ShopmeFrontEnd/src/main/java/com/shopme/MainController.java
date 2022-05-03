package com.shopme;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.shopme.category.CategoryService;
import com.shopme.common.entity.Brand;
import com.shopme.common.entity.Category;
import com.shopme.common.entity.Product;
import com.shopme.product.ProductService;
@Controller
public class MainController {
	
	@Autowired private CategoryService categoryService;
	@Autowired private ProductService productService;
	@GetMapping("")
	public String viewHomePage(Model model) {
		List<Category> listCategories = categoryService.listNoChildrenCategories();
		List<Product> listproducts = productService.listAll();
		
		model.addAttribute("listproducts", listproducts);
		model.addAttribute("listCategories", listCategories);
		return "index";
	}
}