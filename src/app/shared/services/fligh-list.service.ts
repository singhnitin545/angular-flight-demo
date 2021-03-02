import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable()
export class FlighListService {
  constructor() {}
  public flightList = [
    {
      name: "Indigo",
      id: "6E-2162",
      departure: {
        time: "05:00",
        city: "newDelhi"
      },
      arrival: {
        time: "11:00",
        city: "Goa"
      },
      duration: "06 hrs 30 min ",
      price: 5000
    },
    {
      name: "Indigo",
      id: "6E-2168",
      departure: {
        time: "07:00",
        city: "banglore"
      },
      arrival: {
        time: "11:00",
        city: "pune"
      },
      duration: "04 hrs 30 min ",
      price: 3000
    }
  ];

  getlist(): Observable<any[]> {
    return of(this.flightList);
  }
}
