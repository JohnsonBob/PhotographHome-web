import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {BitService} from 'ngx-bit';
import {Observable, of} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {LocalStorage} from '@ngx-pwa/local-storage';
import {MainService} from '../api/main.service';

@Injectable()
export class Auth implements CanActivate {
  constructor(private bit: BitService,
              private storage: LocalStorage,
              private main: MainService,
              private router: Router) {
  }

  canActivate() {
    return this.storage.getItem('mobile').pipe(
      switchMap(data => {
        if (!data) {
          return this.checkAuthFailed();
        } else {
          return this.storage.getItem('token');
        }
      }),
      switchMap(data => {
        if (!data) {
          return this.checkAuthFailed();
        } else {
          return this.storage.getItem('refresh_token');
        }
      }),
      switchMap(data => {
        if (!data) {
          return this.checkAuthFailed();
        } else {
          return this.main.check();
        }
      }),
    );
  }

  /**
   * TODO:检测失败，需要重新登录
   */
  checkAuthFailed(): Observable<boolean> {
    this.router.navigateByUrl('/login');
    console.log('check');
    return of(false);
  }
}
