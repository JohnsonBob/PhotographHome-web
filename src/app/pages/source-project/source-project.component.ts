import { Component, OnInit } from '@angular/core';
import {MainService} from '../../api/main.service';
import {LocalStorage} from '@ngx-pwa/local-storage';
import {NzNotificationService} from 'ng-zorro-antd';
import {Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {BitService} from 'ngx-bit';
import {CreatePhoto} from '../../create-photo';

@Component({
  selector: 'app-source-project',
  templateUrl: './source-project.component.html',
  styleUrls: ['./source-project.component.scss']
})
export class SourceProjectComponent implements OnInit {
  selectedValue = 'allProject';
  createPhoto: CreatePhoto = {
    createPhotosType: 1, isVisiblePhotos: false
  };

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

  constructor(private mainService: MainService,
              private storage: LocalStorage,
              private notification: NzNotificationService,
              private router: Router,
              private fb: FormBuilder,
              public bit: BitService) { }

  ngOnInit() {
  }

  /**
   * 创建相册按钮点击事件
   */
  showCreatePhotosModal(): void {
    this.createPhoto.isVisiblePhotos = true;
  }
}
