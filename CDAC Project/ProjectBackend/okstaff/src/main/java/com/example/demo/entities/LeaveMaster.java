package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table (name="leave_master")
public class LeaveMaster

{
	@Id
	private String leave_designation;
	@Column
	private String leave_sick_leave;
	@Column
	private String leave_casual_leave;
	
	
	public LeaveMaster() {
		super();
		
	}
	public String getLeave_designation() {
		return leave_designation;
	}
	public void setLeave_designation(String leave_designation) {
		this.leave_designation = leave_designation;
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
	@Override
	public String toString() {
		return "LeaveMaster [leave_designation=" + leave_designation + ", leave_sick_leave=" + leave_sick_leave
				+ ", leave_casual_leave=" + leave_casual_leave + "]";
	}
	
	

}
