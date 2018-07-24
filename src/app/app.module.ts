import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule, MatToolbarModule} from '@angular/material';


import { AppComponent } from './app.component';
import { ListComponent } from './component/list/list.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import {AppRoutingModule} from '../app-routing.module';
import { BoxComponent } from './component/box/box.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DataService} from './services/data.service';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './component/home/home.component';
import {FormsModule} from '@angular/forms';
import { ContentComponent } from './component/content/content.component';
import {ItemComponent} from './component/item/item.component';



@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HeaderComponent,
    FooterComponent,
    BoxComponent,
    HomeComponent,
    ContentComponent,
    ItemComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
