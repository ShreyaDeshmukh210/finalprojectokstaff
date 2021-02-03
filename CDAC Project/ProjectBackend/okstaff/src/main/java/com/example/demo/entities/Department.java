package com.example.demo.entities;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table (name = "department")
public class Department 
{
	@Id
	private int department_id;
	@Column
	private String department_name;
	
	//@OneToMany (mappedBy = "department")
	//List <Employee> employees = new ArrayList();
	
	public Department() 
	{
		super();
	}

	public int getDepartment_id() {
		return department_id;
	}

	public void setDepartment_id(int department_id) {
		this.department_id = department_id;
	}

	public String getDepartment_name() {
		return department_name;
	}

	public void setDepartment_name(String department_name) {
		this.department_name = department_name;
	}

	@Override
	public String toString() {
		return "Department [department_id=" + department_id + ", department_name=" + department_name + "]";
	}


	
	

	
}
