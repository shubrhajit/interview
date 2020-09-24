import { Component, OnInit,  } from '@angular/core';
import { ApiCallService } from './api-call.service';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'interview';
  apikey = '13231eb1b55eeaed3307a9ceb26cfc09';
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


declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);

@Component({
  selector: 'app-output-graph',
  templateUrl: './output-graph.component.html',
  styleUrls: ['./output-graph.sass']
})
export class OutputGraphComponent implements OnInit {
  public options: any = {
    chart: {
      type: 'scatter',
      height: 700
    },
    title: {
      text: 'Sample Scatter Plot'
    },
    credits: {
      enabled: false
    },
    tooltip: {
      formatter: function() {
        return 'x: ' + Highcharts.dateFormat('%e %b %y %H:%M:%S', this.x) +' y: ' + this.y.toFixed(2);
      }
    },
    xAxis: {
      type: 'datetime',
      labels: {
        formatter: function() {
          return Highcharts.dateFormat('%e %b %y', 10);
        }
      }
    },
    series: [
      {
        name: 'Normal',
        turboThreshold: 500000,
        data: [[new Date('2018-01-25 18:38:31').getTime(), 2]]
      },
      {
        name: 'Abnormal',
        turboThreshold: 500000,
        data: [[new Date('2018-02-05 18:38:31').getTime(), 7]]
      }
    ]
  }
  constructor() { }

  ngOnInit(){
    Highcharts.chart('container', this.options);
  }
}
