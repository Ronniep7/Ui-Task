import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {
  chartsList = ['websites', 'logo', 'social media','adwords','E-commerce'];
  public doughnutChartData:number[] = [250, 450, 100,50,50];
  public doughnutChartType:string = 'doughnut';
  constructor() { }

  ngOnInit() {
  }
}
