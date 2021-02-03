package com.example.demo.entities;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;



@Entity
@Table(name="payslip")
public class Payslip

{
	@Id
	@GeneratedValue (strategy=GenerationType.AUTO)
	private int payslip_id;
	
	@Column
	private int payslip_workingdays;
	
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="payslip_emp_id")
	private Employee employee;
	
	@Column
	private Date payslip_date;        //check datatype in database
	
	@Column
	private float payslip_salary;
	

	public Payslip() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getPayslip_id() {
		return payslip_id;
	}
	public void setPayslip_id(int payslip_id) {
		this.payslip_id = payslip_id;
	}

	
	public int getPayslip_workingdays() {
		return payslip_workingdays;
	}
	public void setPayslip_workingdays(int payslip_workingdays) {
		this.payslip_workingdays = payslip_workingdays;
	}
	public Employee getEmployee() {
		return employee;
	}
	public void setEmployee(Employee employee) {
		this.employee = employee;
	}

	public Date getPayslip_date() {
		return payslip_date;
	}
	public void setPayslip_date(Date payslip_date) {
		this.payslip_date = payslip_date;
	}
	public float getPayslip_salary() {
		return payslip_salary;
	}
	public void setPayslip_salary(float payslip_salary) {
		this.payslip_salary = payslip_salary;
	}
	@Override
	public String toString() {
		return "Payslip [payslip_id=" + payslip_id + ", payslip_workingdays=" + payslip_workingdays + ", employee="
				+ employee + ", payslip_date=" + payslip_date + ", payslip_salary=" + payslip_salary + "]";
	}
	
	
	
	



	
	
	

}
