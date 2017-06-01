import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginCallbackComponent } from './../components/login/login-callback.component';
import { PriceComponent } from './../components/price/price.component';

import { APIService } from './../services/api.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginCallbackComponent,
    PriceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [APIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
