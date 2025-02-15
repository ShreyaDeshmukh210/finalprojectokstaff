package com.example.demo.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.entities.LeaveTransaction;
import com.example.demo.services.LeaveService;

@CrossOrigin(origins = "Http://localhost:4200")
@RestController
public class LeaveController 
{
	@Autowired
	LeaveService leaveservice;
	
	
	@GetMapping("/getleave/{id}")
	public LeaveTransaction getLeaveById(@PathVariable(value = "id")int empid)
	{
		return leaveservice.getLeave(empid);	
	}
	
	@PostMapping("/insertLeave")
	public int leaveApproved(@RequestBody LeaveTransaction leavetransaction)
	{
		System.out.println(leavetransaction);
		LeaveTransaction lt =leaveservice.insertLeave(leavetransaction);
		return lt.getEmployee().getEmp_id();
	}
	
	@PutMapping("/approveLeave")
	public void approvedLeave(@RequestBody LeaveTransaction leavetransaction)
	{
		leaveservice.ApproveLeave(leavetransaction);
	}
	
	@PutMapping("/rejectLeave")
	public void rejectLeave(@RequestBody LeaveTransaction leavetransaction)
	{
		leaveservice.RejectLeave(leavetransaction);
	}
	
	 @GetMapping("/allLeaves")
	 public List<LeaveTransaction> getAllEmployee()
	 {
		return leaveservice.getLeaves();
	 }

}
