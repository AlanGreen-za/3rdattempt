import { Component, OnInit } from '@angular/core';
import { LINE_CHART_COLORS } from '../../shared/chart.colors';

const LINE_CHART_SAMPLE_DATA: any[] = [
  {data: [4, 8, 3, 5, 7, 4], label: 'DMS PRO'},
  {data: [2, 3, 4, 0, 4, 2], label: 'DMS ACCOUNTING'},
  {data: [3, 1, 1, 2, 3, 5], label: 'WEBMASTER'},
];

const LINE_CHART_LABELS: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];



@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() { }

  lineChartData = LINE_CHART_SAMPLE_DATA;
  lineChartLabels = LINE_CHART_LABELS;
  lineChartOptions: any = {
    responsive: true
  };

  lineChartLegend: true;
  lineChartType = 'line';
  lineChartColors = LINE_CHART_COLORS;



  ngOnInit(): void {
  }

  

}
