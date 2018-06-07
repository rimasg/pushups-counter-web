import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";
import { ChartsModule } from "ng2-charts";
import { environment } from "../environments/environment";

import { AppComponent } from './app.component';
import { FirebaseStatsComponent } from './components/firebase-stats/firebase-stats.component';
import { FirebaseChartsComponent } from './components/firebase-charts/firebase-charts.component';


@NgModule({
  declarations: [
    AppComponent,
    FirebaseStatsComponent,
    FirebaseChartsComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
