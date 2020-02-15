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
import { CommonService } from './common.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component'
import { AngularFireModule } from 'angularfire2'
import { AngularFirestoreModule } from 'angularfire2/firestore'
import { FireServiceService } from './fire-service.service'
import { AngularFireAuthModule } from 'angularfire2/auth'
import { FormsModule } from '@angular/forms'
import { HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    PnfComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    CardsComponent,
    MiddleComponent,
    CalendarComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CommonService, FireServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
