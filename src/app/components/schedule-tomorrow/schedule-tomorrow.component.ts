import {Component, OnDestroy, OnInit} from '@angular/core';
import {CurrentDayService, State} from "../../services/current-day.service";
import {Subscription} from "rxjs";
import {scheduleTable} from "../../models/schedule-table";

@Component({
  selector: 'app-schedule-tomorrow',
  templateUrl: './schedule-tomorrow.component.html',
  styleUrls: ['./schedule-tomorrow.component.scss']
})
export class ScheduleTomorrowComponent implements OnInit, OnDestroy {

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
