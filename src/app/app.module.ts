import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./shared/components/header/header.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { LoginComponent } from "./components/login/login.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { SearchFlightComponent } from "./components/search-flight/search-flight.component";
import { FlighListService } from "./shared/services/fligh-list.service";
import { CustomerComponent } from "./components/customer/customer.component";
import { CustomerService } from "./shared/services/customer.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    DashboardComponent,
    SearchFlightComponent,
    CustomerComponent
  ],
  bootstrap: [AppComponent],
  providers: [FlighListService, CustomerService]
})
export class AppModule {}
