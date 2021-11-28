import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { CardComponent } from './card/card.component';
import { AppRoutingModule } from './app-routing.module';
import { DetailComponent } from './detail/detail.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    CardComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatIconModule,
    RouterModule,
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule { }
