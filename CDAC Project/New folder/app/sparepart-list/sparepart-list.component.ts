import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SparepartService } from '../sparepart.service';

@Component({
  selector: 'app-sparepart-list',
  templateUrl: './sparepart-list.component.html',
  styleUrls: ['./sparepart-list.component.css']
})
export class SparepartListComponent implements OnInit {

  spareparts=[]

  constructor(
    private router : Router,
    private sparepartService : SparepartService) { }

  ngOnInit(): void {
    this.loadSpareparts()
  }

  loadSpareparts()
  {
    this.sparepartService
    .getSpareparts()
    .subscribe(response => {
      if (response['status'] == 'success'){
        this.spareparts = response['data']
      }else{
        console.log(response['error'])
      }
    })
  }

  onEdit(sparepart)
  {
    this.router.navigate(['/sparepart-add'])
  }

}
