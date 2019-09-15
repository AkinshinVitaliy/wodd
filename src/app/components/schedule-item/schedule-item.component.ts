import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../../models/item";
import {TimeOrder} from "../../models/time-order";

@Component({
  selector: 'app-schedule-item',
  templateUrl: './schedule-item.component.html',
  styleUrls: ['./schedule-item.component.scss']
})
export class ScheduleItemComponent implements OnInit {

  @Input() item: Item;
  @Input() time: TimeOrder;
  @Input() position: number;

  constructor() {
  }

  ngOnInit() {
  }

}
