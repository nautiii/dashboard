import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

    ip: string = '';
    date: Date = new Date();
    utc: string = `${this.date.getFullYear()}-${this.date.getMonth() + 1}-${this.date.getDate()}  ${this.date.getHours() < 10 ? 0 : ''}${this.date.getHours()}:${this.date.getMinutes() < 10 ? 0 : ''}${this.date.getMinutes()}:${this.date.getSeconds() < 10 ? 0 : ''}${this.date.getSeconds()}`;

    constructor(private http: HttpClient) { }

    ngOnInit(): void {
        this.http.get('https://cors-anywhere.herokuapp.com/http://api.ipify.org/?format=json')
            .subscribe((res: any) => {
                this.ip = res.ip;
            });
    }

}
