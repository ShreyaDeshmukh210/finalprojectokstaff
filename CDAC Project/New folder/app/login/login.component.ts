import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  username = ''
  password = ''

  constructor(
    private adminService: AdminService) { 
   
  }

  ngOnInit(): void {
  }

  onLogin()
  {
    this.adminService
    .login(this.username, this.password)
    .subscribe(response => {
      if(response['status'] == 'success'){
        const data= response['data']

        sessionStorage['name'] = data['name']
      }else{
        alert('invalid username or password')
      }
    })
  }

}
