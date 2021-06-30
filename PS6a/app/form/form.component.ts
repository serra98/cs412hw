import { Component, OnInit } from '@angular/core';
import {WxServiceService as WxService} from '../wx-service.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Zipcode} from '../data/Zipcode';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  title = 'httpClient';
  currentZip = {
    input: '',
    wx_desc: '',
    temp_f: '',
    feelslike_f: '',
    cloudtotal_pct: ''
  };
  zipcodes: Zipcode[] = [];

  zipcode: number;

  constructor(private wxService: WxService, private form: FormBuilder) {
  }


  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  getWeatherByZipcode() {
    this.wxService.getWeatherByZipcode(this.zipcode).subscribe(
      response => {
        this.currentZip = {
          input: this.zipcode,
          wx_desc: JSON.stringify(response.wx_desc),
          temp_f: JSON.stringify(response.temp_f),
          feelslike_f: JSON.stringify(response.feelslike_f),
          cloudtotal_pct: JSON.stringify(response.cloudtotal_pct)
        }
        this.zipcodes.push(this.currentZip);
        console.log(this.zipcode);
        console.log(`main looks like this: ${JSON.stringify(response)}`);
      }
    );
  }
}

