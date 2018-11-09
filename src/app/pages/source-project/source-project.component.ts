import { Component, OnInit } from '@angular/core';
import {MainService} from '../../api/main.service';
import {LocalStorage} from '@ngx-pwa/local-storage';
import {NzNotificationService} from 'ng-zorro-antd';
import {Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {BitService} from 'ngx-bit';

@Component({
  selector: 'app-source-project',
  templateUrl: './source-project.component.html',
  styleUrls: ['./source-project.component.scss']
})
export class SourceProjectComponent implements OnInit {
  selectedValue = 'allProject';
  isVisiblePhotos = false;    // 是否显示创建相册
  thiscreatePhotosType: number;

  constructor(private mainService: MainService,
              private storage: LocalStorage,
              private notification: NzNotificationService,
              private router: Router,
              private fb: FormBuilder,
              public bit: BitService) { }

  ngOnInit() {
    this.thiscreatePhotosType = 1;
  }

  /**
   * 创建相册按钮点击事件
   */
  showCreatePhotosModal(): void {
    console.log('isVisiblePhotos：' + this.isVisiblePhotos);
    this.isVisiblePhotos = true;
    console.log('isVisiblePhotos：' + this.isVisiblePhotos);
  }
}
