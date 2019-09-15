import {Component, OnDestroy, OnInit} from '@angular/core';
import {scheduleTable} from "../../models/schedule-table";
import {CurrentDayService, State} from "../../services/current-day.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit, OnDestroy {

  public scheduleTable = scheduleTable;
  public itemOrders = [1, 2, 3, 4, 5, 6, 0];
  public state: State;
  public position: number;
  private sub: Subscription;

  constructor(private currentDayService: CurrentDayService) {
  }

  ngOnInit() {
    this.sub = this.currentDayService.state.subscribe(state => {
      this.state = state;
      if (state.day === 0) {
        this.position = state.nextPosition;
      } else {
        this.position = state.position;
      }
    })
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}
