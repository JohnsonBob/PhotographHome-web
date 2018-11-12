import { Component, OnInit } from '@angular/core';
import {CreatePhoto} from '../../create-photo';

@Component({
  selector: 'app-spretty-project',
  templateUrl: './spretty-project.component.html',
  styleUrls: ['./spretty-project.component.scss']
})
export class SprettyProjectComponent implements OnInit {
  selectedValue = 'allProject';

  createPhoto: CreatePhoto = {
    createPhotosType: 2, isVisiblePhotos: false
  };

  constructor() { }

  ngOnInit() {
  }

  /**
   * 创建相册按钮点击事件
   */
  showCreatePhotosModal(): void {
    this.createPhoto.isVisiblePhotos = true;
  }

}
