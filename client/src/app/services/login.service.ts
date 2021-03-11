import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})

export class LoginService {

    constructor(private formBuilder: FormBuilder) { }

    getLoginForm(): FormGroup {
        return this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

}
