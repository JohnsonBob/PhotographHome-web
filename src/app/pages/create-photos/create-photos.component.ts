import {Component, Input, OnInit} from '@angular/core';
import {BitService} from 'ngx-bit';
import {LocalStorage} from '@ngx-pwa/local-storage';
import {NzNotificationService} from 'ng-zorro-antd';
import {MainService} from '../../api/main.service';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {CreatePhoto} from '../../create-photo';

@Component({
  selector: 'app-create-photos',
  templateUrl: './create-photos.component.html',
  styleUrls: ['./create-photos.component.scss']
})

/**
 * 创建相册弹窗组件 2018年11月12日14:29:27
 */
export class CreatePhotosComponent implements OnInit {
  @Input() createPhoto: CreatePhoto;

  constructor(private mainService: MainService,
              private storage: LocalStorage,
              private notification: NzNotificationService,
              private router: Router,
              private fb: FormBuilder,
              public bit: BitService) { }

  ngOnInit() {
    this.bit.form = this.fb.group({
      projectname            : [ null, [ Validators.required ] ],
      starttime              : [ null, [ Validators.required ] ],
      endtime                : [ null, [ Validators.required ] ],
      desc                   : [ null, [ Validators.required ] ],
    });
  }

  /**
   * 创建相册按钮点击事件
   */
  showCreatePhotosModal(): void {
    this.createPhoto.isVisiblePhotos = true;
  }

  /**
   * 创建相册弹窗确认按钮事件
   */
  createPhotosOk(): void {
   // this.createPhoto.isVisiblePhotos = false;
    console.log('Button ok clicked!' + this.createPhoto.isVisiblePhotos);
  }

  /**
   * 创建相册弹窗取消按钮事件
   */
  createPhotosCancel(): void {
    this.createPhoto.isVisiblePhotos = false;
    console.log('Button cancel clicked!' + this.createPhoto.isVisiblePhotos);
  }

}
