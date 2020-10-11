import { Component, OnInit } from "@angular/core";
import { MonitorService } from "../monitor.service";

@Component({
  selector: "app-monitor-type-selection",
  templateUrl: "./monitor-type-selection.component.html",
  styleUrls: ["./monitor-type-selection.component.scss"],
})
export class MonitorTypeSelectionComponent implements OnInit {
  constructor(private monitorsService: MonitorService) {}

  monitors$ = this.monitorsService.getLegendFromApi();

  ngOnInit(): void {}
}
