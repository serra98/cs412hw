import {Component, Input, OnInit} from '@angular/core';
import {Zipcode} from '../data/Zipcode';

@Component({
  selector: 'app-result',
  template: '<h2>Displaying the result </h2>' +
    '<div name="outerList" *ngFor="let zipcode of zipcodes">' +
    '<div name="details" *ngIf="isEqual(zipcode.input)">' +
    '<h3> Zipcode: {{currentZip.input}} </h3> <br/>' +
    '<table> <tr> <td> Weather Description</td> <td>{{currentZip.wx_desc}} </td></tr>' +
    '<tr> <td> Temperature in Farenheit </td> <td>  {{currentZip.temp_f}} </td></tr>' +
    '<tr> <td> (Feels like) Temperature </td> <td>  {{currentZip.temp_f}} </td></tr>' +
    '<tr> <td> Cloud </td> <td>  {{currentZip.cloudtotal_pct}} </td></tr> </table>' +
    '<br/>' + '</div>' + '</div>',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  @Input() currentZip = {
    input: '',
    wx_desc: '',
    temp_f: '',
    feelslike_f: '',
    cloudtotal_pct: ''
  }

  @Input() zipcodes: Zipcode[] = [];
  constructor() { }

  ngOnInit(): void {

  }

  // tslint:disable-next-line:typedef
  isEqual(zipName: string) {
    return zipName === this.currentZip.input;
  }

}
