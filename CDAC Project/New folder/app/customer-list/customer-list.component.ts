import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {


  customers = []

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.loadCustomers()
  }

  loadCustomers()
  {
    this.customerService
    .getCustomers()
    .subscribe(response => {
      if (response['status'] == 'success'){
        this.customers = response['data']
      }else{
        console.log(response['error'])
      }
    })
  }

}
