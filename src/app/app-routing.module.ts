import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component'  
import { PnfComponent } from './pnf/pnf.component';


// const routes: Routes = [];
const routes: Routes = [

  { path: 'main', component: MainComponent },
  { path: '', component: MainComponent},
  { path: '**', component: PnfComponent}

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
