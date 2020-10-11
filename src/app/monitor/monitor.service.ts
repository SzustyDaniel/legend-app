import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import { Legend } from "../models/legend";
import { LegendResponse } from "../models/legend-response";
import { Monitor } from "../models/monitor";
import { MonitorType } from "../models/monitor-type";

@Injectable({
  providedIn: "root",
})
export class MonitorService {
  private readonly apiRoute = "api";

  constructor(private http: HttpClient) {}

  public getLegendFromApi(): Observable<MonitorType[]> {
    return this.http.get<LegendResponse>(this.apiRoute + "/legends").pipe(
      map((results) => {
        // convert results from API to the application models
        return results.MonitorType.map((monitorType) => {
          const legend = results.Legends.find(
            (l) => l.Id === monitorType.LegentId
          );
          const transformedLegend: Legend = {
            id: legend.Id,
            tags: legend.tags.map((tag) => {
              return { label: tag.Label, color: tag.Color };
            }),
          };
          const monitors: Monitor[] = [];
          results.Monitor.forEach((m) => {
            if (m.MonitorTypeId === monitorType.Id) {
              monitors.push({
                id: m.Id,
                monitorTypeId: m.MonitorTypeId,
                name: m.Name,
                description: m.Desc,
              });
            }
          });
          const convertedResponse: MonitorType = {
            id: monitorType.Id,
            name: monitorType.Name,
            description: monitorType.description,
            monitors,
            legend: transformedLegend,
            legendId: monitorType.LegentId,
          };

          return convertedResponse;
        });
      }),
      tap((r) => console.log(r))
    );
  }
}
