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
  selectedMonitorTypeIndex: number;
  selectedMonitorIndex: number;

  constructor(private monitorsService: MonitorService) {}

  monitors$ = this.monitorsService.getLegendFromApi();

  ngOnInit(): void {
    this.selectedMonitorTypeIndex = -1;
    this.selectedMonitorIndex = -1;
  }

  selectMonitorType(monitorType: MonitorType, index: number) {
    console.log(`Selected monitorType: ${monitorType.name}`);
    this.selectedMonitorTypeIndex =
      this.selectedMonitorTypeIndex === index ? -1 : index;
    console.log(this.selectedMonitorTypeIndex);
    if (this.selectedMonitorTypeIndex > 0) {
      this.monitorsService.selectMonitorType(monitorType);
    } else {
      this.monitorsService.selectMonitorType(undefined);
    }

    this.selectedMonitorIndex = -1;
  }

  selectMonitor(index: number, monitor: Monitor, monitorType: MonitorType) {
    console.log(monitor.name);
    this.selectedMonitorIndex = index;
    this.monitorsService.selectMonitor(monitor);
    this.monitorsService.selectLegend(monitorType.legend);
  }

  isMonitorTypeOpen(index: number): boolean {
    return index === this.selectedMonitorTypeIndex;
  }
}
