package com.shopme.admin.brand;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;


import com.shopme.common.entity.Brand;

public interface BrandRepository extends PagingAndSortingRepository<Brand, Integer> {

	public Long countById(Integer id);
	
	public Brand findByName(String name);
	
	
	
	@Query("SELECT NEW Brand(b.id, b.name) FROM Brand b ORDER BY b.name ASC")
	public List<Brand> findAll();
	
	@Query("SELECT b FROM Brand b")
	public List<Brand> findAlls();
}
