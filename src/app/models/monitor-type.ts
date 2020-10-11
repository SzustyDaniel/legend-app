import { Legend } from "./legend";
import { Monitor } from "./monitor";

export interface MonitorType {
  id: number;
  name: string;
  description: string;
  legendId: number;
  monitors: Monitor[];
  legend: Legend;
}
