import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  private apikey = '13231eb1b55eeaed3307a9ceb26cfc09';
  private apiurl =  'api.openweathermap.org/data/2.5/weather?q=';
  // preparedUrl = 
  constructor( private http:HttpClient ) { 

  }
  getCityWeather(city:string){
    this.http.get(this.apiurl+city+'&appid='+this.apikey).subscribe((data)=>{
      return data;
    })
  }

}
