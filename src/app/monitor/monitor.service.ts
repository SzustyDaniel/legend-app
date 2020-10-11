import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class MonitorService {
  private readonly apiRoute = "api";

  constructor(private http: HttpClient) {}

  public getLegendFromApi() {
    return this.http.get(this.apiRoute + "/legends");
  }
}
