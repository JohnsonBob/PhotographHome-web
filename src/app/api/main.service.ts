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
  login(username: string, password: string): Observable<any> {
    return this.http.req('api/login', {
      username: username,
      password: password
    });
  }

  /**
   * TODO:定义一个检测请求
   */
  check(): Observable<boolean> {
    return this.http.req('main/check');
  }

}
