import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResidentsModule } from './residents/residents.module';
import { EventsModule } from './events/events.module';
import { BusinessesModule } from './businesses/businesses.module';
import { EmployeesModule } from './employees/employees.module';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ResidentsModule,
    EventsModule,
    BusinessesModule,
    EmployeesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
