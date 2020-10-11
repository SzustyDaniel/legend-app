import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonitorRoutingModule } from './monitor-routing.module';
import { MonitorComponent } from './monitor.component';
import { LegendComponent } from './legend/legend.component';
import { MonitorTypeSelectionComponent } from './monitor-type-selection/monitor-type-selection.component';


@NgModule({
  declarations: [MonitorComponent, LegendComponent, MonitorTypeSelectionComponent],
  imports: [
    CommonModule,
    MonitorRoutingModule
  ]
})
export class MonitorModule { }
