import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  url = 'http://localhost:7070/admins'
  constructor(
    private httpClient: HttpClient ) { }

  login(username: string, password: string){
    const body = {
      username: username,
      password: password
    }
    return this.httpClient.post(this.url + '/signin', body)
  }
  
}
