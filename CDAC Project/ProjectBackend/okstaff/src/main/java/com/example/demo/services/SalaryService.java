package com.example.demo.services;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.entities.Salary;
import com.example.demo.repository.SalaryRepository;

@Service
public class SalaryService 
{
	@Autowired
	SalaryRepository salaryrepository;
	
	public Salary getSalary(int empid)
	{		
		return salaryrepository.getOne(empid);
	}
		
	public void UpdateSalary(Salary salary)   
	{		
		salaryrepository.insertSal(salary.getEmployee().getEmp_id(), salary.getSalary_ctc(), salary.getSalary_monthly_sal(),salary.getSalary_PF(), salary.getSalary_proftax());
		/*Salary sal=salaryrepository.getOne(empid);
		sal.setSalary_ctc(salary.getSalary_ctc());
		sal.setSalary_monthly_sal(salary.getSalary_monthly_sal());
		sal.setSalary_PF(salary.getSalary_PF());
		sal.setSalary_proftax(salary.getSalary_proftax());
		
	     return salaryrepository.save(salary);	*/	
	}
	
	public List<Salary> getSalary()
	{
		return salaryrepository.findAll();
	}

	
	
	
	
}

