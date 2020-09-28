import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-chart-severity-amount',
  templateUrl: './chart-severity-amount.component.html',
  styleUrls: ['./chart-severity-amount.component.scss'],
})
export class ChartSeverityAmountComponent implements OnInit, OnChanges {
  @Input()
  private bugs = [];

  public pieChartLabels = ['CRITICAL', 'HIGH', 'MEDIUM', 'LOW'];
  public pieChartData = [0, 0, 0, 0];
  public pieChartType = 'pie';
  public chartOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
  };

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    this.initChartData();
  }

  initChartData() {
    for (let bug of this.bugs) {
      let idx = this.pieChartLabels.indexOf(bug.severity);
      if (idx !== -1) {
        this.pieChartData[idx]++;
        this.pieChartData = [...this.pieChartData];
      }
    }
  }
}
