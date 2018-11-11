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

  /**
   * TODO:提交
   */
  submit = (data) => {
    // console.log('提交');
    this.loading = true;
    if(!this.bit.form.valid) return;
    this.mainService.register(data.username, data.password, data.email, data.mobile, data.nickname).subscribe(res => {
      if (res.code) {
        this.notification.success(this.bit.l['register_tips'], this.bit.l['register_success']);
        this.router.navigateByUrl('/login');
      } else {
        this.loginFailed(res.msg);
      }
    });
  }
}
