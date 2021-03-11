import { Component } from '@angular/core';
import { Back4AppService } from './services/back4-app.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {

    constructor(private db: Back4AppService) {
        this.db.initialize();
    }

}
