import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})

export class SignupService {

    constructor(private formBuilder: FormBuilder) { }

    getSignupForm(): FormGroup {
        return this.formBuilder.group({
            username: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

}
