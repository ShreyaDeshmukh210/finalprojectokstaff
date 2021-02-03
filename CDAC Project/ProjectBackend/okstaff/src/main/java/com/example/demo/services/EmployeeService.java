package com.example.demo.services;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import com.example.demo.entities.Employee;
import com.example.demo.repository.EmployeeRepository;
@Service
public class EmployeeService
{
	@Autowired
	EmployeeRepository employeeRepository;
	
	
	
	
	/*public void saveAttendanceInTime(int empid,Attendance Inattendance)
	{
		System.out.println(Inattendance);
        Inattendance.getEmployee().setEmp_id(empid);
		attendancerepository.save(Inattendance);	
	}*/

	/*public void saveAttendanceInTime(int empid)
	{
		Date date=new Date();
        attendancerepository.saveInTime(empid,date);
	}*/
	
	public List<Employee> getAll()
	{
		
		return employeeRepository.findAll();
	}
	
	public Employee saveEmployee(Employee employee)
	{
		System.out.println(employee);
		return employeeRepository.save(employee);
	}
	
	
	public Employee getEmployeeById(Integer emp_id)
	{
		Optional<Employee> emp =  employeeRepository.findById(emp_id) ;
	    Employee employee=null;
	    try
	    {
	    	employee=emp.get();
	    }
	    catch (NoSuchElementException e) 
	    {
			employee=null;
		}
		return employee;
		
	}
	
	 
	public void deleteEmployeeById(Integer empid)
	{
		Employee employee=employeeRepository.findById(empid).get();
	
		employeeRepository.delete(employee);
	}
	
	
	public Employee getOneEmployee(Integer empid)
	{
		Employee employee=employeeRepository.getOne(empid);
		return employee;
	}
	
	
	public Employee updateEmployee(int employeeid,Employee empdetails) 
	{
		 Employee employee = getOneEmployee(employeeid);
		 //empdetails.setEmp_id(emp_id);
		 employee.setEmp_password(empdetails.getEmp_password());
		 employee.setEmp_fname(empdetails.getEmp_fname());
		 employee.setEmp_lname(empdetails.getEmp_lname());
		 employee.setEmp_mname(empdetails.getEmp_mname());
		 employee.setEmp_contactno(empdetails.getEmp_contactno());
		 employee.setEmp_emailid(empdetails.getEmp_emailid());
		 employee.setEmp_address(empdetails.getEmp_address());
		 employee.setEmp_aadharcard(empdetails.getEmp_aadharcard());
		 employee.setEmp_photo(empdetails.getEmp_photo());
		 employee.setEmp_dob(empdetails.getEmp_dob());
		 employee.setEmp_securityque(empdetails.getEmp_securityque());
	 
		 return saveEmployee(employee);
	}
	
	
	

	
	
	

}
