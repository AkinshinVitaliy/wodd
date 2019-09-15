import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ScheduleComponent} from "./components/schedule/schedule.component";
import {ScheduleTodayComponent} from "./components/schedule-today/schedule-today.component";
import {ScheduleTomorrowComponent} from "./components/schedule-tomorrow/schedule-tomorrow.component";
import {MainComponent} from "./components/main/main.component";


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {path: 'all', component: ScheduleComponent},
      {path: 'today', component: ScheduleTodayComponent},
      {path: 'tomorrow', component: ScheduleTomorrowComponent},
      {path: '**', pathMatch: 'full', redirectTo: 'tomorrow'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
