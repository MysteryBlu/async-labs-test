import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FeedModel } from './models/feed/FeedModel';
import { BaseApiInterceptor } from './helpers/BaseApiInterceptor';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AppComponent,
    {provide: HTTP_INTERCEPTORS, useClass: BaseApiInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
