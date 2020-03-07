import {Injectable} from '@angular/core';
import * as moment from 'moment';
import {BehaviorSubject, interval} from "rxjs";
import {map} from "rxjs/operators";

export interface State {
  day: number;
  nextDay: number;
  item: number;
  position: number;
  nextPosition: number;
  weekNumber: number;
}

@Injectable({
  providedIn: 'root'
})
export class CurrentDayService {

  public state = new BehaviorSubject(null);
  public weekStart = 7;
  public interval$ = interval(1000 * 60).pipe(
    map(time => {
      this.state.next(this.getState());
    })
  );

  constructor() {
    this.state.next(this.getState());
    this.interval$.subscribe();
  }

  private getState(): State {
    const day = moment().day();
    const item = 0;
    const nextDay = (day + 1) % 7;
    let position;
    let nextPosition;
    const currWeek = moment().week();
    if ((currWeek % 2) === 0) {
      if (day === 0) {
        position = 1;
        nextPosition = 0;
      } else {
        position = 0;
        nextPosition = 0;
      }
    } else {
      if (day === 0) {
        position = 0;
        nextPosition = 1;
      } else {
        position = 1;
        nextPosition = 1;
      }
    }
    const weekNumber = currWeek - this.weekStart;
    return {day, item, nextDay, position, nextPosition, weekNumber};
  }
}
