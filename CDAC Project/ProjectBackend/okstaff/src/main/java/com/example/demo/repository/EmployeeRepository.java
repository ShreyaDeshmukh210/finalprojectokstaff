package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Employee;


@Repository
public interface EmployeeRepository extends JpaRepository<Employee,Integer>
{
	@Query(value="select * from employee where emp_id=:id",nativeQuery = true)
	public Employee login(@Param("id")Integer empid);
	
}
