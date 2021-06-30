import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormGroup} from '@angular/forms';
import {config as API} from '../config/openweather';

@Injectable({
  providedIn: 'root'
})
export class WxServiceService {

  baseURL: string = API.APP_URL
  constructor(private http: HttpClient) { }


  getWeatherByZipcode(zipcode: number) {
    console.log(`in getWeatherByZipcode `)
    return this.http.get(API.APP_URL + zipcode + '?app_id=' + API.APP_ID + '&app_key=' + API.APP_KEY);

  }
}
