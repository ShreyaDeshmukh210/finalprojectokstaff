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
@Table (name="leave_transaction")
public class LeaveTransaction

{
	@Id
	@GeneratedValue (strategy = GenerationType.AUTO)
	private int leave_transaction_id;
	
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn (name = "leave_emp_id")
	Employee employee;
	
	@Column
	String leave_sick_leave;
	@Column
	String leave_casual_leave;
	@Column	
	@CreatedDate
    @JsonFormat(pattern="yyyy-MM-dd")
	Date leave_todate;
	@Column	
	@CreatedDate
    @JsonFormat(pattern="yyyy-MM-dd")
	Date leave_fromdate;
	@Column
	String leave_description;
	public LeaveTransaction()
	{
		super();
		
	}
	public int getLeave_transaction_id()
	{
		return leave_transaction_id;
	}
	public void setLeave_transaction_id(int leave_transaction_id) {
		this.leave_transaction_id = leave_transaction_id;
	}

	public Employee getEmployee() {
		return employee;
	}
	public void setEmployee(Employee employee) {
		this.employee = employee;
	}
	public String getLeave_sick_leave() {
		return leave_sick_leave;
	}
	public void setLeave_sick_leave(String leave_sick_leave) {
		this.leave_sick_leave = leave_sick_leave;
	}
	public String getLeave_casual_leave() {
		return leave_casual_leave;
	}
	public void setLeave_casual_leave(String leave_casual_leave) {
		this.leave_casual_leave = leave_casual_leave;
	}

	public Date getLeave_todate() {
		return leave_todate;
	}
	public void setLeave_todate(Date leave_todate) {
		this.leave_todate = leave_todate;
	}
	public Date getLeave_fromdate() {
		return leave_fromdate;
	}
	public void setLeave_fromdate(Date leave_fromdate) {
		this.leave_fromdate = leave_fromdate;
	}
	public String getLeave_description() {
		return leave_description;
	}
	public void setLeave_description(String leave_description) {
		this.leave_description = leave_description;
	}
	@Override
	public String toString() {
		return "LeaveTransaction [leave_transaction_id=" + leave_transaction_id + ", employee=" + employee
				+ ", leave_sick_leave=" + leave_sick_leave + ", leave_casual_leave=" + leave_casual_leave
				+ ", leave_todate=" + leave_todate + ", leave_fromdate=" + leave_fromdate + ", leave_description="
				+ leave_description + "]";
	}

	
	
	
	
}
