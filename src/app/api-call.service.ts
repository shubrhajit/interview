import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  private apikey = '13231eb1b55eeaed3307a9ceb26cfc09';
  private apiurl =  'http://api.openweathermap.org/data/2.5/';
  // preparedUrl = 
  constructor( private http:HttpClient ) { 

  }
  getCityWeather(city:string){
    return this.http.get<object>(this.apiurl+'weather?q='+city+'&appid=' + this.apikey);
  }
}
