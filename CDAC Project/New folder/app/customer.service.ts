import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  url = 'http://localhost:7070/admins/getAllCustomers'

  constructor(private httpClient: HttpClient) { }

  getCustomers(){
    return this.httpClient.get(this.url)
  }
}
