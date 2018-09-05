import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
tasks ={
  head : 'Tasks',alert :[5,2],
messages : [
  {title : 'New website for symu.co',timePassed :5},
  {title : 'Free business PSD template',timePassed :2},
  {title : 'New logo for JCD.pl',timePassed :3},
  {title : 'New icons set vol.3',timePassed :3},
]
}
messages = {

  head : 'Messages',alert : [2],
  messages : [
{name :'nina jones',timePassed : '5 minutes',title:'hey you! it me again :-)'},
{name :'nina jones',timePassed : '2 days',title:'hey you! it me again :-)'},
{name :'jaden smith',timePassed : '20 minutes',title:'good morning you are fired!'},
{name :'nina jones',timePassed : '2 years',title:'hello ! could you bring me coffe'},

  ]
}
activity ={
  head : 'Activity',alert :[10],
  messages : [
    {name :'nina jones',timePassed : '5 minutes',action:'added new project',actionName : 'Free ui kit'},
    {name :'nina jones',timePassed : '40 minutes',action:'completed task',actionName : 'Free psd template'},
    {name :'nina jones',timePassed : '1 hour',action:'completed project',actionName : 'symu website'},
    {name :'nina jones',timePassed : '3 hours',action:'added new project',actionName : 'Free psd'},


      ]
}

}
