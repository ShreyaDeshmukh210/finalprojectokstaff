package com.example.demo.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.entities.Employee;
import com.example.demo.repository.EmployeeRepository;

import com.example.demo.services.EmployeeService;

@CrossOrigin(origins = "*", allowedHeaders = "*", originPatterns = "*" )
@RestController
public class EmployeeController 

{	
	
	/*public void saveInTime(@RequestParam("id") int empid)
	{
		System.out.println("##################################");
		System.out.println(empid);
		employeeService.saveAttendanceInTime(empid);
	}*/
	

   @Autowired
   private EmployeeService employeeService;
   @Autowired
   private EmployeeRepository employeerepository;
   
   @GetMapping("/Employees")
   public List<Employee> getAllEmployee()
   {
	  return employeeService.getAll();
   }
   
   @PostMapping("/insertEmployee")
   public int insertEmployee(@RequestBody Employee employee)
   {
	 Employee saveemployee=employeeService.saveEmployee(employee);
	 return saveemployee.getEmp_id();
   }
   
   @GetMapping("/getEmployee")
   public Employee getEmployeeById(@RequestParam("id") int empid)
   {
	   return employeeService.getEmployeeById(empid);
	   
   }

  @DeleteMapping("/deleteEmployee/{id}")
   public void removeEmployee(@PathVariable("id") int empid)
   {
	  System.out.println(empid);
	   employeeService.deleteEmployeeById(empid);
   }
  
  
  @PutMapping("/updateEmployee/{id}")
  public Employee updateEmployee(@PathVariable(value = "id")Integer employeeid, @RequestBody Employee empdetails )
  {
	  return employeeService.updateEmployee(employeeid,empdetails);
  }
  
  @GetMapping("/login")
	public Employee login(@RequestParam(value="id") int empid, @RequestParam(value = "pass") String password) {
		Employee employee = employeerepository.login(empid);
		if(employee != null)
			return employee;
		else 
			return new Employee();
	}
}


  
  

   
   
