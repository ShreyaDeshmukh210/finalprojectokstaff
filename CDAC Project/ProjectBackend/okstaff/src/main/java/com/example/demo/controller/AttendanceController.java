package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Attendance;
import com.example.demo.services.AttendanceService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class AttendanceController
{
	@Autowired
	AttendanceService attendanceservice;

	/*@PostMapping("/saveintime/{id}")
	public void saveInTime(@PathVariable(value="id") int empid)
	{
		attendanceservice.saveAttendanceInTime(empid);
	}*/
	
	@GetMapping("/saveintime")
	public void saveInTime(@RequestParam(value="id") int empid)
	{
		attendanceservice.saveAttendanceInTime(empid);
	}
	
	@GetMapping("/saveouttime")
	public void updateOutTime(@RequestParam(value="id") int empid )
	{
		attendanceservice.saveAttendanceOutTime(empid);	
	}
	
	@GetMapping("/getattendance/{id}")
	public Attendance getattendance(@PathVariable(value="id") int empid)
	{
		return attendanceservice.getAttendanceById(empid);
	}
}
