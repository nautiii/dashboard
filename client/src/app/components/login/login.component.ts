import { Component, OnInit } from '@angular/core';

import { Back4AppService } from '../../services/back4-app.service';
import { LoginService } from '../../services/login.service';
import { GoogleService } from '../../services/google.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

    form = this.login.getLoginForm();
    googleSignIn = (): void => this.google.signIn();
    loadFromDb = (): void => this.db.loadAccount(this.form.value);

    constructor(
        private db: Back4AppService,
        private login: LoginService,
        private google: GoogleService,
    ) { }

    ngOnInit(): void { }

}
