import { Component, OnInit } from "@angular/core";
import { Monitor } from "src/app/models/monitor";
import { MonitorType } from "src/app/models/monitor-type";
import { MonitorService } from "../monitor.service";
import {
  faAngleDoubleDown,
  faAngleDoubleUp,
} from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: "app-monitor-type-selection",
  templateUrl: "./monitor-type-selection.component.html",
  styleUrls: ["./monitor-type-selection.component.scss"],
})
export class MonitorTypeSelectionComponent implements OnInit {
  collapseIcon = faAngleDoubleDown;
  returnIcon = faAngleDoubleUp;
  displayMonitorIndex: number;
  selectedMonitorIndex: number;

  constructor(private monitorsService: MonitorService) {}

  monitors$ = this.monitorsService.getLegendFromApi();

  ngOnInit(): void {
    this.displayMonitorIndex = -1;
    this.selectedMonitorIndex = -1;
  }

  selectMonitorType(monitorType: MonitorType, index: number) {
    console.log(`Selected monitorType: ${monitorType.name}`);
    this.displayMonitorIndex = this.displayMonitorIndex === index ? -1 : index;
    console.log(this.displayMonitorIndex);
    if (this.displayMonitorIndex > 0) {
      this.monitorsService.selectMonitorType(monitorType);
    } else {
      this.monitorsService.selectMonitorType(undefined);
    }

    this.selectedMonitorIndex = -1;
  }

  selectMonitor(index: number, monitor: Monitor, monitorType: MonitorType) {
    console.log(monitor.name);
    this.selectedMonitorIndex = index;
    this.monitorsService.selectLegend(monitorType.legend);
  }
}
