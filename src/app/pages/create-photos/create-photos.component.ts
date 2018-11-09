import {Component, Input, OnInit} from '@angular/core';
import {BitService} from 'ngx-bit';
import {LocalStorage} from '@ngx-pwa/local-storage';
import {NzNotificationService} from 'ng-zorro-antd';
import {MainService} from '../../api/main.service';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-photos',
  templateUrl: './create-photos.component.html',
  styleUrls: ['./create-photos.component.scss']
})
export class CreatePhotosComponent implements OnInit {
  @Input() createPhotosType: number;    // 创建相册类型 1、源相册  2、发布相册
  @Input() isVisiblePhotos: boolean;    // 是否显示创建相册

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
    this.isVisiblePhotos = true;
  }

  /**
   * 创建相册弹窗确认按钮事件
   */
  createPhotosOk(): void {
    this.isVisiblePhotos = false;
    console.log('Button ok clicked!' + this.isVisiblePhotos);
  }

  /**
   * 创建相册弹窗取消按钮事件
   */
  createPhotosCancel(): void {
    this.isVisiblePhotos = false;
    console.log('Button cancel clicked!' + this.isVisiblePhotos);
  }
}
