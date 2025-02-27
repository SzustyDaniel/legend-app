import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";

@Injectable({
  providedIn: "root",
})
export class InMemoryMockDb implements InMemoryDbService {
  constructor() {}

  createDb() {
    const legends = {
      MonitorType: [
        {
          Id: 0,
          Name: "Index",
          LegentId: 0,
          description: "Air Quality Index",
        },
        {
          Id: 1,
          Name: "Pollutant",
          LegentId: 1,
          description: "Pollutant",
        },
        {
          Id: 2,
          Name: "Meteorology",
          LegentId: 1,
          description: "Meteorology",
        },
      ],
      Legends: [
        {
          Id: 1,
          tags: [
            {
              Label: "Current Data",
              Color: "#2795c3",
            },
            {
              Label: "No Current Data",
              Color: "#969696",
            },
          ],
        },
        {
          Id: 0,
          tags: [
            {
              Label: "GOOD",
              Color: "#00E400",
            },
            {
              Label: "MODERATE",
              Color: "#FFFF00",
            },
            {
              Label: "UNHEALTHY FOR SENSITIVE GROUPS",
              Color: "#FF7E00",
            },
            {
              Label: "UNHEALTHY",
              Color: "#FF0000",
            },
            {
              Label: "VERY UNHEALTHY",
              Color: "#99004C",
            },
            {
              Label: "HAZARDOUS",
              Color: "#4C0026",
            },
            {
              Label: "NO DATA",
              Color: "#C0C0C0",
            },
          ],
        },
      ],
      Monitor: [
        {
          Id: 0,
          Name: "All",
          Desc: "",
          MonitorTypeId: 0,
        },
        {
          Id: 22,
          Name: "PM10",
          Desc: "",
          MonitorTypeId: 0,
        },
        {
          Id: 21,
          Name: "PM2.5",
          Desc: "",
          MonitorTypeId: 0,
        },
        {
          Id: 4,
          Name: "SO2",
          Desc: "Trace SO2",
          MonitorTypeId: 0,
        },
        {
          Id: 3,
          Name: "CO",
          Desc: "Trace CO",
          MonitorTypeId: 0,
        },
        {
          Id: 2,
          Name: "O3",
          Desc: "Ozone (O3)",
          MonitorTypeId: 0,
        },
        {
          Id: 22,
          Name: "PM10",
          Desc: "",
          MonitorTypeId: 1,
        },
        {
          Id: 21,
          Name: "PM2.5",
          Desc: "",
          MonitorTypeId: 1,
        },
        {
          Id: 2,
          Name: "O3",
          Desc: "Ozone (O3)",
          MonitorTypeId: 1,
        },
        {
          Id: 1,
          Name: "NO2",
          Desc: "",
          MonitorTypeId: 1,
        },
        {
          Id: 15,
          Name: "Temperature",
          Desc: "Temperature 2m",
          MonitorTypeId: 2,
        },
        {
          Id: 18,
          Name: "RH",
          Desc: "Relative Humidity",
          MonitorTypeId: 2,
        },
        {
          Id: 36,
          Name: "BP",
          Desc: "Pressure",
          MonitorTypeId: 2,
        },
        {
          Id: 19,
          Name: "Wind",
          Desc: "Wind Speed S",
          MonitorTypeId: 2,
        },
        {
          Id: 20,
          Name: "Wind Direction",
          Desc: "Wind Dir S",
          MonitorTypeId: 2,
        },
      ],
    };
    return { legends };
  }
}
