import { Injectable } from '@angular/core';
import {HttpService} from 'ngx-bit';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpService) { }


  /**
   * TODO:定义一个登录请求
   *
   */
  login(mobile: string, password: string): Observable<any> {
    return this.http.req('api/login', {
      mobile: mobile,
      password: password
    });
  }

  /**
   * TODO:定义一个检测请求
   */
  check(): Observable<boolean> {
    return this.http.req('main/check');
  }

  /**
   * TODO:定义一个注册请求
   *
   */
  register(name: string, password: string, email: string, mobile: string, nickname: string): Observable<any> {
    return this.http.req('api/register', {
      name: name,
      password: password,
      email: email,
      mobile: mobile,
      nickname: nickname,
    });
  }

}
