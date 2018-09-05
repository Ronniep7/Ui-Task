import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  @Input() tasks;
  starter(string)
  {
 return string.substring(0,1);
  }
 
  checkAlerts(){
    if(this.tasks.alert.length > 0)
    {
      return true;
    }
    else{
      return false;
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
