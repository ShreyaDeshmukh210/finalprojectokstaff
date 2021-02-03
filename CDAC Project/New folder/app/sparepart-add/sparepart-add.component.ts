import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sparepart-add',
  templateUrl: './sparepart-add.component.html',
  styleUrls: ['./sparepart-add.component.css']
})
export class SparepartAddComponent implements OnInit {

  spareId=0
  price=0
  warranty=0
  companyName=''
  partName=''


  constructor() { }

  ngOnInit(): void {
  }



}
