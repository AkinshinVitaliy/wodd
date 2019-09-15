import {Component, OnInit} from '@angular/core';
import {CurrentDayService, State} from "../../services/current-day.service";
import {Subscription} from "rxjs";
import {scheduleTable} from "../../models/schedule-table";

@Component({
  selector: 'app-week-info',
  templateUrl: './week-info.component.html',
  styleUrls: ['./week-info.component.scss']
})
export class WeekInfoComponent implements OnInit {

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
