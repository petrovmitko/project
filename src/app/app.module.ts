import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PnfComponent } from './pnf/pnf.component';
import { CommonService } from './common.service';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CardsComponent } from './cards/cards.component';
import { MiddleComponent } from './middle/middle.component';
import { CalendarComponent } from './calendar/calendar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component'
import { AngularFireModule } from 'angularfire2'
import { AngularFirestoreModule } from 'angularfire2/firestore'
import { FireServiceService } from './fire-service.service'
import { AngularFireAuthModule } from 'angularfire2/auth'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { environment } from '../environments/environment';
import { DestinationsComponent } from './destinations/destinations.component';
import { LogoSmallComponent } from './logo-small/logo-small.component';
import { RouterModule } from '@angular/router'

// new
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { DetailsComponent } from './details/details.component';
import { SplitPipePipe } from './split-pipe.pipe';
import { CommentPipePipe } from './comment-pipe.pipe';
import { UserProfileComponent } from './user-profile/user-profile.component';



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
    ContactsComponent,
    DestinationsComponent,
    LogoSmallComponent,
    DetailsComponent,
    SplitPipePipe,
    CommentPipePipe,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'project'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    AngularFireDatabaseModule // new
  ],
  providers: [FireServiceService, CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
