import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Weather} from './weather';


const urlBase = 'http://api.openweathermap.org/data/2.5/weather';



interface WeatherResponse {
  weather: Weather[];
}

@Injectable()
export class WeatherZipCodeService {

  constructor(private http: HttpClient) {
  }


  getWeatherForecast(zipCode): Observable<any[]> {

    return this.http.get(urlBase +'?zip='+zipCode+'&appid=dbd57fd18ad1415cfa823370ab48681f' )
      .map(response => this.extractData(response))
      .catch(console.log('error'));
  }

  private extractData(res: any) {
    const body = res.json();
    return body.list || { };
  }
}
