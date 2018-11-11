import { Component, OnInit } from '@angular/core';
import {MainService} from '../../api/main.service';
import {Router} from '@angular/router';
import {BitService} from 'ngx-bit';
import {LocalStorage} from '@ngx-pwa/local-storage';
import {NzNotificationService} from 'ng-zorro-antd';
import {promise} from 'selenium-webdriver';
import {Language} from './language';
import {FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  loading = false;

  constructor(private mainService: MainService,
              private storage: LocalStorage,
              private notification: NzNotificationService,
              private router: Router,
              private fb: FormBuilder,
              public bit: BitService) { }

  ngOnInit() {
    this.bit.buildLanguage(Language.factory);
    this.bit.form = this.fb.group({
      email            : [ null, [ Validators.required, Validators.email ] ],
      password         : [ null, [ Validators.required , Validators.minLength(8), Validators.maxLength(18)] ],
      username         : [ null, [ Validators.required ] ],
      checkPassword    : [ null, [ Validators.required, this.confirmationValidator ] ],
      nickname         : [ null, [ Validators.required ] ],
      mobilePrefix: [ '+86' ],
      mobile      : [ null, [ Validators.required ] ],
      // captcha          : [ null, [ Validators.required ] ],
      // agree            : [ false ]
    });
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

  updateConfirmValidator(): void {
    /** wait for refresh value */
    // Promise.resolve().then(() => this.bit.form.controls.checkPassword.updateValueAndValidity());
  }

  confirmationValidator = (control: FormControl): { [ s: string ]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.bit.form.controls.password.value) {
      return { confirm: true, error: true };
    }
  }

  getCaptcha(e: MouseEvent): void {
    // e.preventDefault();
  }


  /**
   * TODO:注册失败
   */
  loginFailed(msg: string) {
    this.loading = false;
    this.notification.error(this.bit.l['register_tips'], this.bit.l['register_failed'] + msg);
  }

}
