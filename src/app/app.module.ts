import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./shared/components/header/header.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { LoginComponent } from "./components/login/login.component";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SearchFlightComponent } from './components/search-flight/search-flight.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    DashboardComponent,
    SearchFlightComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
