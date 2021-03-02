import { Component, OnInit } from "@angular/core";
import { FlighListService } from "../../shared/services/fligh-list.service";

@Component({
  selector: "app-search-flight",
  templateUrl: "./search-flight.component.html",
  styleUrls: ["./search-flight.component.css"]
})
export class SearchFlightComponent implements OnInit {
  constructor(private flighListService: FlighListService) {}
  flightList: any = [];
  ngOnInit() {
    this.flighListService.getlist().subscribe(res => {
      console.log(res);
      this.flightList = res;
    });
  }
}
