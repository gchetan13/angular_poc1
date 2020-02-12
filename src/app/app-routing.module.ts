import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScreensComponent } from './screens/screens.component';

const routes: Routes = [
  {
    path: 'screens',
    component :ScreensComponent
  },
  {
    path :'',
    redirectTo : '/screens',
    pathMatch : 'full'    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
