import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class WeatherService {

    private url = 'http://api.weatherstack.com/current';
    private apiKey = '834c5ef701f692f805a64eda7671acfd';

    constructor(private http: HttpClient) { }

    getWeather = (location: any) => this.http.get(`${this.url}?access_key=${this.apiKey}&query=${location}`);

}
