import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public apiUrl = 'https://demo8479064.mockable.io/';
  constructor(private http: HttpClient) { }

  getHomeData() {
    return this.http.get(this.apiUrl + 'getHome');
    // const dataval = this.http.get(this.apiUrl + 'getHome').subscribe(data => data)
    // console.log(dataval)
  }
  getHeaderData() {
    return this.http.get(this.apiUrl + 'getHeader');
  }
}
