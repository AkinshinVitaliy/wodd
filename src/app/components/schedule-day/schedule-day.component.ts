import {Component, Input, OnInit} from '@angular/core';
import {Day} from "../../models/day";
import {timeOrder} from "../../models/time-order";

@Component({
  selector: 'app-schedule-day',
  templateUrl: './schedule-day.component.html',
  styleUrls: ['./schedule-day.component.scss']
})
export class ScheduleDayComponent implements OnInit {

  public timeOrder = timeOrder;
  public itemOrders = [0, 1, 2, 3, 4, 5];
  @Input() day: Day;
  @Input() position: number;

  constructor() {
  }

  ngOnInit() {
  }

}
