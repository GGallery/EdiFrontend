import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlSegment } from '@angular/router';
import {ListComponent} from './app/component/list/list.component';
import {HomeComponent} from './app/component/home/home.component';
import {BoxComponent} from './app/component/box/box.component';

const routes: Routes = [
  { path: 'categoria', component: BoxComponent  },
  // { path: 'immobili', component: ElencoComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
