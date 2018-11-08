import {Component, OnDestroy, OnInit} from '@angular/core';
import {BitService} from 'ngx-bit';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.scss']
})
export class DashboardsComponent implements OnInit, OnDestroy {
  isCollapsed = false;
  isReverseArrow = false;
  width = 200;


  ngOnDestroy(): void {
  }

  constructor(public bit: BitService) {
  }

  ngOnInit() {
  }

}
