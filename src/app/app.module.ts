import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScheduleDayComponent } from './components/schedule-day/schedule-day.component';
import { ScheduleItemComponent } from './components/schedule-item/schedule-item.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { ScheduleTodayComponent } from './components/schedule-today/schedule-today.component';
import { ScheduleTomorrowComponent } from './components/schedule-tomorrow/schedule-tomorrow.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainComponent } from './components/main/main.component';
import { WeekInfoComponent } from './components/week-info/week-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleDayComponent,
    ScheduleItemComponent,
    ScheduleComponent,
    ScheduleTodayComponent,
    ScheduleTomorrowComponent,
    ToolbarComponent,
    MainComponent,
    WeekInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
