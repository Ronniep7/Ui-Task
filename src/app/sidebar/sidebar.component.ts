import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  links = 
  [
    {name : 'Home',icon :'fas fa-home'},
    {name : 'Workflow',icon :'fas fa-bars'},
    {name : 'Statistics',icon :'fas fa-chart-area'},
    {name : 'Calender',icon :'fas fa-calendar-alt'},
    {name : 'Users',icon :'fas fa-user'},
    {name : 'Settings',icon :'fas fa-cog'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
