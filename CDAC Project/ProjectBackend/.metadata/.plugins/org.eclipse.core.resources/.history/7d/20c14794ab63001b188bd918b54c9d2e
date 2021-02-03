package com.example.demo.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Payslip;
import com.example.demo.services.PaySlipService;

@CrossOrigin(origins = "Http://localhost:4200")
@RestController
public class PaySlipController 
{
	@Autowired
	PaySlipService  payslipservice;
	 

	/*@GetMapping("/genaratePayslip/{id}")
	public void generatePaySlipById(@PathVariable("id") int empid)
	{
		payslipservice.generatePaySlipById(empid);
		
	}*/
	@GetMapping("/insertPayslip/{id}")
	public void insertPaySlipById(@PathVariable(value = "id") int empid)
	{
		payslipservice.insertPayslip(empid);;
		
	}
	
	@GetMapping("/getPayslipById/{id}")
	public Payslip getPayslipById(@PathVariable(value = "id")Integer empid)
	{
		return payslipservice.getPayslipById(empid);
		
	}
}
