import { Component, OnInit } from '@angular/core';

import { Back4AppService } from '../../services/back4-app.service';
import { SignupService } from '../../services/signup.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

    form = this.signup.getSignupForm();
    storeInDb = (): void => this.db.addAccount(this.form.value);

    constructor(
        private db: Back4AppService,
        private signup: SignupService,
    ) { }

    ngOnInit(): void { }

}
