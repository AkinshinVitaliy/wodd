import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'wodd';
  public weekName: string;

  ngOnInit(): void {
    const weekNumber = moment().week();
    if ((weekNumber % 2) === 0) {
      this.weekName = 'Числитель';
    } else {
      this.weekName = 'Знаменатель';
    }
  }

}
