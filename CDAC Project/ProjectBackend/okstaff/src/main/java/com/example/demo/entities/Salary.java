package com.example.demo.entities;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="salary")
public class Salary 

{
	@Id
	private int salary_id;
	
	@JsonIgnoreProperties("employee")
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "salary_emp_id")
	private Employee employee;
	
	@Column
	private float salary_ctc;
	
	@Column
	private float salary_monthly_sal;
	
	@Column
	private float salary_PF;
	
	@Column
	private float salary_proftax;
	
	
	public Salary() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getSalary_id() {
		return salary_id;
	}
	public void setSalary_id(int salary_id) {
		this.salary_id = salary_id;
	}


	public Employee getEmployee() {
		return employee;
	}
	public void setEmployee(Employee employee) {
		this.employee = employee;
	}
	public float getSalary_ctc() {
		return salary_ctc;
	}
	public void setSalary_ctc(float salary_ctc) {
		this.salary_ctc = salary_ctc;
	}
	public float getSalary_monthly_sal() {
		return salary_monthly_sal;
	}
	public void setSalary_monthly_sal(float salary_monthly_sal) {
		this.salary_monthly_sal = salary_monthly_sal;
	}
	public float getSalary_PF() {
		return salary_PF;
	}
	public void setSalary_PF(float salary_PF) {
		this.salary_PF = salary_PF;
	}
	public float getSalary_proftax() {
		return salary_proftax;
	}
	public void setSalary_proftax(float salary_proftax) {
		this.salary_proftax = salary_proftax;
	}
	@Override
	public String toString() {
		return "Salary [salary_id=" + salary_id + ", employee=" + employee + ", salary_ctc=" + salary_ctc
				+ ", salary_monthly_sal=" + salary_monthly_sal + ", salary_PF=" + salary_PF + ", salary_proftax="
				+ salary_proftax + "]";
	}
	
	
	
}
