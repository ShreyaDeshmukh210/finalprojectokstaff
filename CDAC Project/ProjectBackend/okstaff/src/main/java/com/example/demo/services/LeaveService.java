package com.example.demo.services;
import java.io.Console;
import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.entities.LeaveTransaction;
import com.example.demo.repository.LeaveRepository;

@Service
public class LeaveService 
{
	@Autowired
	LeaveRepository leaverepository;
	
	public LeaveTransaction getLeave(int emp_id)
	{
	
		Optional<LeaveTransaction> leave =  leaverepository.findById(emp_id) ;
		LeaveTransaction leavetransaction=null;
	    try
	    {
	    	leavetransaction=leave.get();
	    }
	    catch (NoSuchElementException e) 
	    {
			leavetransaction=null;
		}
	     System.out.println(leavetransaction); 
		return leavetransaction;
	}
	
	public void RejectLeave(LeaveTransaction leavetransaction)
	{
		
		leavetransaction.setLeave_description("Reject");
		leaverepository.updateLeaveDesc(leavetransaction.getEmployee().getEmp_id(),leavetransaction.getLeave_description());
	}
	
	public void ApproveLeave(LeaveTransaction leavetransaction)
	{
		
		leavetransaction.setLeave_description("Approved");
		System.out.println(leavetransaction.getEmployee().getEmp_id());
		System.out.println(leavetransaction.getLeave_description());
		leaverepository.updateLeaveDesc(leavetransaction.getEmployee().getEmp_id(),leavetransaction.getLeave_description());
		
	}
	

	public LeaveTransaction insertLeave(LeaveTransaction leavetransaction)
	{
		
		leavetransaction.setLeave_description("waiting");
		return leaverepository.save(leavetransaction);
		
		//leaverepository.insertLeave(leavetransaction.getEmployee().getEmp_id(),leavetransaction.getLeave_sick_leave(),leavetransaction.getLeave_casual_leave(),leavetransaction.getLeave_fromdate(),leavetransaction.getLeave_todate(),leavetransaction.getLeave_description());
	}
	
	
	
	public List<LeaveTransaction> getLeaves()
	{
		return leaverepository.getAllEmployeeLeave();
	}
	
	
	//count
	public int  getAllLeave(int empid)
	{
		int count=0;
		List<LeaveTransaction> leaves = getLeaves();
		System.out.println(leaves);
		List<Integer> allempid=new ArrayList<Integer>();
		
		for (LeaveTransaction lt : leaves)  
			{
				allempid.add(lt.getEmployee().getEmp_id());
				count++;	
			}
		System.out.println(allempid);
		return count;
	}
}

    
