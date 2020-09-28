import { ChartBugStatusAmountComponent } from './components/chart-bug-status-amount/chart-bug-status-amount.component';
import { ChartSeverityAmountComponent } from './components/chart-severity-amount/chart-severity-amount.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    DashboardComponent,
    ChartSeverityAmountComponent,
    ChartBugStatusAmountComponent,
  ],
  imports: [CommonModule, ChartsModule],
})
export class DashboardModule {}
