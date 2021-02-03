import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, Event, NavigationEnd} from '@angular/router'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private routr:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
   
  }

}
