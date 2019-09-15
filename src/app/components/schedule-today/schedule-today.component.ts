import {Component, OnDestroy, OnInit} from '@angular/core';
import {CurrentDayService, State} from "../../services/current-day.service";
import {scheduleTable} from "../../models/schedule-table";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-schedule-today',
  templateUrl: './schedule-today.component.html',
  styleUrls: ['./schedule-today.component.scss']
})
export class ScheduleTodayComponent implements OnInit, OnDestroy {

  public scheduleTable = scheduleTable;
  public state: State;
  private sub: Subscription;

  constructor(private currentDayService: CurrentDayService) {
  }

  ngOnInit() {
    this.sub = this.currentDayService.state.subscribe(state => {
      this.state = state;
    })
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}
