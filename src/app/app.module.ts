import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { RatingComponent } from './rating/rating.component';
import { TimeCountDownComponent } from './time-count-down/time-count-down.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    RatingComponent,
    TimeCountDownComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
