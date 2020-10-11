export interface LegendResponse {
  MonitorType: {
    Id: number;
    Name: string;
    LegentId: number;
    description: string;
  }[];
  Legends: { Id: number; tags: { Label: string; Color: string }[] }[];
  Monitor: {
    Id: number;
    Name: string;
    Desc: string;
    MonitorTypeId: number;
  }[];
}
