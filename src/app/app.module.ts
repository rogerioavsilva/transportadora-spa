import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TransportadoraSideNavComponent } from './components/transportadora-side-nav/transportadora-side-nav.component';
import { TransportadoraListComponent } from './components/transportadora-list/transportadora-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TransportadoraSideNavComponent,
    TransportadoraListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
