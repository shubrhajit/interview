import { Component  } from '@angular/core';
import { ApiCallService } from './api-call.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'interview';
  data:object;
  date:Date;
  cityName:string='';

  constructor(private api:ApiCallService){
    this.cityChange();
    this.date = new Date;
  }
  
  cityChange(){
    this.cityName = (this.cityName === '') ? 'chennai' : this.cityName;
    this.api.getCityWeather(this.cityName).subscribe((d)=>{
      console.log(d);
      this.data = d;
    })
  }   
  
}