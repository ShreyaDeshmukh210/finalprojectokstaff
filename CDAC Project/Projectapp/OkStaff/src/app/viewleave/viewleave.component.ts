import { LeaveComponent } from './../leave/leave.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewleave',
  templateUrl: './viewleave.component.html',
  styleUrls: ['./viewleave.component.scss']
})
export class ViewleaveComponent implements OnInit {
test: "approved";
  constructor() { }

  ngOnInit(): void {
  }

}
