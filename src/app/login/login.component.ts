import {Component, OnInit} from '@angular/core';
import {BitService} from 'ngx-bit';
import {FormBuilder, Validators} from '@angular/forms';
import {Language} from './language';
import {Observable, of} from 'rxjs';
import {LocalStorage} from '@ngx-pwa/local-storage';
import {switchMap} from 'rxjs/operators';
import {NzNotificationService} from 'ng-zorro-antd';
import {Router} from '@angular/router';
import {MainService} from '../api/main.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loading = false;

  constructor(private main: MainService,
              private storage: LocalStorage,
              private notification: NzNotificationService,
              private router: Router,
              private fb: FormBuilder,
              public bit: BitService) {
  }

  ngOnInit() {
    this.bit.buildLanguage(Language.factory);
    this.bit.form = this.fb.group({
      username: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      password: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(18)]]
    });
  }

  /**
   * TODO:提交
   */
  submit = (data) => {
    this.loading = true;
    this.main.login(data.username, data.password).subscribe(res => {
      if (!res.error) {
        this.setStorage(data.username, res.data.token, res.data.refresh_token).subscribe(status => {
          if (status) {
            this.notification.success(this.bit.l['login_tips'], this.bit.l['login_success']);
            setTimeout(() => {
              this.loading = false;
              this.router.navigateByUrl('/');
            }, 200);
          } else {
            this.loginFailed();
          }
        });
      } else {
        this.loginFailed();
      }
    });
  }

  /**
   * TODO:设置存储
   * @param username 用户名
   * @param token 执行令牌
   * @param refresh_token 可刷新令牌
   */
  setStorage(username: string, token: string, refresh_token: string): Observable<boolean> {
    return this.storage.setItem('username', username).pipe(
      switchMap(status => {
        if (!status) {
          return of(status);
        } else {
          return this.storage.setItem('token', token);
        }
      }),
      switchMap(status => {
        if (!status) {
          return of(status);
        } else {
          return this.storage.setItem('refresh_token', refresh_token);
        }
      })
    );
  }

  /**
   * TODO:登录失败
   */
  loginFailed() {
    this.loading = false;
    this.notification.error(this.bit.l['login_tips'], this.bit.l['login_failed']);
  }
}
