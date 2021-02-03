package com.example.demo.repository;

import java.util.Date;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Attendance;


@Repository
public interface AttendanceRepository extends JpaRepository<Attendance,Integer>
{
	
	@Transactional
	@Modifying
	@Query(value="insert into attendance (attendance_emp_id, attendance_intime) "
			+ "values(:empid,:date)",nativeQuery = true)
    public void saveInTime(@Param("empid")Integer empid,@Param("date")Date date);
	
}
