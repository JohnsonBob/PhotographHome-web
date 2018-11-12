import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../../common/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})

/**
 * 项目组件 2018年11月12日14:33:32
 */
export class ProjectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  deleteProject(): void {
    console.log('deleteProject');
  }

  editProject(): void {
    console.log('editProject');
  }
}
