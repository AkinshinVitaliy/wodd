import {Injectable} from '@angular/core';
import * as moment from 'moment';
import {BehaviorSubject} from "rxjs";

export interface State {
  day: number;
  nextDay: number;
  item: number;
  position: number;
  nextPosition: number;
}

@Injectable({
  providedIn: 'root'
})
export class CurrentDayService {

  public state = new BehaviorSubject(null);

  constructor() {
    this.state.next(this.getState());
  }

  private getState(): State {
    const day = moment().day();
    const item = 0;
    const nextDay = (day + 1) % 7;
    let position;
    let nextPosition;
    if ((moment().week() % 2) === 0) {
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
    return {day, item, nextDay, position, nextPosition};
  }
}
