import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminModule } from './admin/admin.module';
import { UiModule } from './ui/ui.module';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from './ui/layout/layout.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AdminModule, UiModule,
    HttpClientModule,
    LayoutModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
