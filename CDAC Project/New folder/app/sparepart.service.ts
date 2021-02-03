import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SparepartService {

  url = 'http://localhost:7070/admins/getAllSparePart'

  constructor(private httpClient: HttpClient) { }

  getSpareparts(){
    return this.httpClient.get(this.url)
  }
}
