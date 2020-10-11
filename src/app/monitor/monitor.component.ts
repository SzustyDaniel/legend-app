import { Component, OnInit } from "@angular/core";
import { MonitorService } from "./monitor.service";

@Component({
  selector: "app-monitor",
  templateUrl: "./monitor.component.html",
  styleUrls: ["./monitor.component.scss"],
})
export class MonitorComponent implements OnInit {
  constructor(private monitorService: MonitorService) {}

  ngOnInit(): void {
    this.monitorService.getLegendFromApi().subscribe((r) => console.log(r));
  }
}
