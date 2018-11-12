import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})

/**
 * 项目详情界面 2018年11月12日22:28:57
 */
export class ProjectDetailComponent implements OnInit {

  data = [
        {
            title: 'Title 1'
        },
        {
            title: 'Title 2'
        },
        {
            title: 'Title 3'
        },
        {
            title: 'Title 4'
        },
        {
            title: 'Title 5'
        },
        {
            title: 'Title 6'
        }
    ];

  constructor() { }

  ngOnInit() {
  }

}
