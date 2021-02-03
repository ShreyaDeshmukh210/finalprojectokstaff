package com.example.demo.repository;


import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Salary;

@Repository
public interface SalaryRepository extends JpaRepository<Salary,Integer> {


	@Query(value="select * from salary where salary_emp_id=:empid",nativeQuery = true)
	public Salary getSalary(@Param("empid")Integer empid);
	
	//@Query("update Customer u set u.phone = :phone where u.id = :id")
	//into salary (salary_emp_id,salary_ctc, salary_monthly_sal, salary_PF, salary_proftax)"
	//+ "values(:empid,:ctc,:monthsal,:pf,:tax)
	
	@Transactional
	@Modifying
	@Query(value=" update salary s set s.salary_ctc = :ctc,s.salary_monthly_sal = :monthsal,s.salary_PF = :pf,s.salary_proftax = :tax where s.salary_emp_id = :empid",nativeQuery = true)
    public void insertSal(@Param("empid")Integer empid,@Param("ctc")Float ctc,@Param("monthsal")Float monthsal,@Param("pf")Float pf,@Param("tax")Float tax);
	
}
