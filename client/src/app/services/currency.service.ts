import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private url = 'https://api.currencyfreaks.com/latest';
  private apiKey = '3a006f49aa974836ab55165bdbc07077';

  constructor(private http: HttpClient) { }

  getConversion = (code: any) => this.http.get(`${this.url}?apikey=${this.apiKey}&symbols=${code}`);

}
