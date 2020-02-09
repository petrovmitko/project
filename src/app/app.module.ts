import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PnfComponent } from './pnf/pnf.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CardsComponent } from './cards/cards.component';
import { MiddleComponent } from './middle/middle.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CommonService } from './common.service'
@NgModule({
  declarations: [
    AppComponent,
    PnfComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    CardsComponent,
    MiddleComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
