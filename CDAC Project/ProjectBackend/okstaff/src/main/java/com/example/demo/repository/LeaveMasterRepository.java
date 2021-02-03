package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.LeaveMaster;

@Repository
public interface LeaveMasterRepository extends JpaRepository<LeaveMaster, String> 
{

}
