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
import org.springframework.data.annotation.CreatedDate;
import com.fasterxml.jackson.annotation.JsonFormat;


@Entity
@Table (name = "attendance")
public class Attendance 

{
	@Id
	@GeneratedValue (strategy = GenerationType.AUTO) //check this
	private int attendance_id;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="attendance_emp_id")
	private Employee employee;
	
	@Column	
	@CreatedDate
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
	private Date attendance_intime;
	
	@Column
	@CreatedDate
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
	private Date attendance_outtime;
	
	public Attendance() 
	{
		super();
	}
	
	public Attendance(int attendance_id, Employee employee, Date attendance_intime, Date attendance_outtime) 
	{
		super();
		this.attendance_id = attendance_id;
		this.employee = employee;
		this.attendance_intime = attendance_intime;
		this.attendance_outtime = attendance_outtime;
	}

	public int getAttendance_id() {
		return attendance_id;
	}
	public void setAttendance_id(int attendance_id) {
		this.attendance_id = attendance_id;
	}

	public Employee getEmployee() {
		return employee;
	}
	public void setEmployee(Employee employee) {
		this.employee = employee;
	}
	public Date getAttendance_intime() {
		return attendance_intime;
	}
	public void setAttendance_intime(Date attendance_intime) {
		this.attendance_intime = attendance_intime;
	}

	public Date getAttendance_outtime() {
		return attendance_outtime;
	}
	public void setAttendance_outtime(Date attendance_outtime) {
		this.attendance_outtime = attendance_outtime;
	}
	
	@Override
	public String toString() {
		return "Attendance [attendance_id=" + attendance_id + ", employee=" + employee + ", attendance_intime="
				+ attendance_intime + ", attendance_outtime=" + attendance_outtime + "]";
	}
	
	
	
}
