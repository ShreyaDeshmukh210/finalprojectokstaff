package com.example.demo.services;
import java.util.Date;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.entities.Payslip;
import com.example.demo.entities.Salary;

import com.example.demo.repository.LeaveRepository;
import com.example.demo.repository.PaySlipRepository;
import com.example.demo.repository.SalaryRepository;

@Service
public class PaySlipService 
{
	@Autowired
	PaySlipRepository paysliprepository;
	@Autowired
	EmployeeService employeeservice;
	@Autowired
	LeaveService leaveservice;
	@Autowired
	LeaveRepository leaverepository;
	@Autowired
	AttendanceService attendanceservice;
	@Autowired
	SalaryRepository salaryrepository;
	
	
	public float generatePaySlipById(int empid)
	{
			int res = 0;
		    int leavecount = leaveservice.getAllLeave(empid);
		   
		    if (leavecount > 2)
		    {
		    	res =  leavecount - 2;	
		    }
		   
		    Salary salary =salaryrepository.getSalary(empid);
	     
		    float calsal= (salary.getSalary_monthly_sal()-(salary.getSalary_monthly_sal()*salary.getSalary_proftax())-(salary.getSalary_monthly_sal()*salary.getSalary_PF())- (res*100));
            	
	       
		    return calsal;
		    
	}
	
	public void insertPayslip(int empid)
	{
		int workingDays= 25;
		Date date=new Date();
		float savePaySlip = generatePaySlipById(empid);
		paysliprepository.setpayslip(empid,workingDays, date,savePaySlip);
	}
	
	public Payslip getPayslipById(int empid)
	{
		return paysliprepository.getPayslip(empid);
		
	}
	

}



//getEmployeeById
//getAttendanceById();
//getLeave();
//getSalaryById()
/*Employee -- employee information to print on payslip like name etc.
attendance -- count
leave--1  check Designation
  2  check no of leaves;
	  3  if manager then sick leave && casual leave > 10 ? if yes count that
	  4  if employee then sick leave && casual leave > 5 ? if yes count that

Salary -- salary structure
Calculate inhand_sal = (monthlysal - protx - pf - (leavecount * 200); */

		/*
		 * ALL INFO FROM DATABASE ONLY DATA HAS TO SHOW
		
		 
		 */
