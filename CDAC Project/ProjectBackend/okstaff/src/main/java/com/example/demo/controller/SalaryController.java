package com.example.demo.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Salary;
import com.example.demo.repository.SalaryRepository;
import com.example.demo.services.SalaryService;

@CrossOrigin(origins = "Http://localhost:4200")
@RestController
public class SalaryController 
{
	@Autowired
	private SalaryService salaryService;
	@Autowired
	SalaryRepository salaryrepository;
	

	
	@PutMapping("/Updatesalary")
	public void UpdateSalary( @RequestBody Salary salary)
	{
		System.out.println("####");
		System.out.println(salary);
		salaryService.UpdateSalary(salary);
	}
	
	@GetMapping("/GetSalary")
	public List<Salary> GetSalary()
	{
		return salaryService.getSalary();
	}
	
	@GetMapping("/empsal")
	public Salary getSalaryById(@RequestParam("id") Integer empid)
	{
		Salary salary=salaryrepository.getSalary(empid);
		return salary;
	}
	

}
