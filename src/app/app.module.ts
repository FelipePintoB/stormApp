import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { AngularFireModule } from "@angular/fire/compat";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from "@core/core.module";
import { environment } from '@env/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
