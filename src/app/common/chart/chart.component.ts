import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  @Input() barChartLabels: Label[] = ['new', 'shipped', 'paid'];
  @Input() barChartData: ChartDataSets[] = [
    { data: [65, 59, 80], label: 'Orders' },
  ];

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    },
  };
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public chartColors: Color[] = [
    { // first color
      backgroundColor: 'rgba(0,0,255,0.4)',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
