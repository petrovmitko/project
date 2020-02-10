import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component'  
import { PnfComponent } from './pnf/pnf.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

// const routes: Routes = [];
const routes: Routes = [

  { path: 'main', component: MainComponent },
  { path: '', component: MainComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  { path: '**', component: PnfComponent}

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
