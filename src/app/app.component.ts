import { Component, OnInit } from '@angular/core';
import { ApiCallService } from './api-call.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent{
  title = 'interview';
  apikey = '13231eb1b55eeaed3307a9ceb26cfc09';
  data:object;
  constructor(private api:ApiCallService){
    this.cityChange();
  }
  
  cityChange(city='chennai'){
    this.api.getCityWeather(city).subscribe((d)=>{
      console.log(d);
      this.data = d;
    })
  }
    
  
}
