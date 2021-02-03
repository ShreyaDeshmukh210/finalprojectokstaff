package com.example.demo.services;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Attendance;
import com.example.demo.repository.AttendanceRepository;

@Service
public class AttendanceService 
{
	@Autowired
	AttendanceRepository attendancerepository;
	
	public Attendance getAttendanceById(int empid)
	{
		return attendancerepository.getOne(empid);
	}
	
	public void saveAttendanceInTime(int empid)
	{
		
		Date date=new Date();
		//Inattendance.setAttendance_intime(date);
		
        attendancerepository.saveInTime(empid,date);
        
		
	}

	public void saveAttendanceOutTime(int empid)
	{
		List<Attendance> attendance =attendancerepository.findAll();
		for (Attendance at : attendance)  
			{
			 if( at.getEmployee().getEmp_id()==empid)
			    {
			    	if(at.getAttendance_outtime()==null)
			    	{
			    		Date date=new Date();
			    		at.setAttendance_outtime(date);
			    		attendancerepository.save(at);
			    	}
			    }
			}
	}
	
}



 
