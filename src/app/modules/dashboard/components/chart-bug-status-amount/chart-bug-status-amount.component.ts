import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-chart-bug-status-amount',
  templateUrl: './chart-bug-status-amount.component.html',
  styleUrls: ['./chart-bug-status-amount.component.scss'],
})
export class ChartBugStatusAmountComponent implements OnInit, OnChanges {
  @Input()
  public bugs = [];

  public pieChartLabels = ['CLOSED', 'OPEN', 'FIXED'];
  public pieChartData = [0, 0, 0];
  public pieChartType = 'doughnut';
  public chartOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
  };

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    this.initChartData();
  }

  ngOnInit() {}

  initChartData() {
    for (let bug of this.bugs) {
      let idx = this.pieChartLabels.indexOf(bug.status);
      if (idx !== -1) {
        this.pieChartData[idx]++;
        this.pieChartData = [...this.pieChartData];
      }
    }
  }
}
