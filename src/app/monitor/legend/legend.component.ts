import { Component, OnInit } from "@angular/core";
import { MonitorService } from "../monitor.service";

@Component({
  selector: "app-legend",
  templateUrl: "./legend.component.html",
  styleUrls: ["./legend.component.scss"],
})
export class LegendComponent implements OnInit {
  constructor(private monitorService: MonitorService) {}

  selectedLegend$ = this.monitorService.publishLegendForMonitorAction$;
  selectedMonitor$ = this.monitorService.monitorSelectionAction$;

  ngOnInit(): void {}
}
