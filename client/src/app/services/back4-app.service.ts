import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as Parse from 'parse';

@Injectable({
    providedIn: 'root'
})

export class Back4AppService {
    
    private appId: string = '6cZC19QXmoxayf02lC3BUu8yKenoqMJ2bHykSOJB';
    private jsKey: string = 'fri2uOaes5kjJ9dyYnO42DuU4Zy7lCdtZ6Z11hLC';
    private url: string = 'https://parseapi.back4app.com/';
    private user: any = {};

    constructor(private route: Router) { }

    initialize(): void {
        Parse.initialize(this.appId, this.jsKey);
        (Parse as any).serverURL = this.url;
        if (Parse.User.current())
            Parse.User.logOut();
    }

    async currentUser() {
        const id: string | undefined = Parse.User.current()?.id;
        const User = new Parse.User();
        const query = new Parse.Query(User as any);

        if (id != undefined)
            this.user = await query.get(id);
        return this.user;
    }

    get getUser() {
        return this.user;
    }

    async signOut(): Promise<void> {
        this.user = {};
        if (Parse.User.current())
            await Parse.User.logOut();
        this.route.navigate(['/login']);
    }

    loadAccount(value: any): void {
        const user: Parse.User<Parse.Attributes> = new Parse.User()

        user.set('username', value.username);
        user.set('password', value.password);

        user.logIn()
            .then(object => console.log(`Successfuly Logged In (id: ${object.id})`))
            .then(_ => this.route.navigate(['/home']))
            .catch(error => alert(`Error: ${error.message}`));
    }

    addAccount(value: any): void {
        const user: Parse.User<Parse.Attributes> = new Parse.User()

        user.set('username', value.username);
        user.set('email', value.email);
        user.set('password', value.password);

        user.signUp()
            .then(object => console.log(`Successfuly Registered (id: ${object.id})`))
            .then(_ => this.route.navigate(['/home']))
            .catch(error => alert(`Error: ${error.message}`));
    }

    async alreadyRegistered(email: string): Promise<boolean> {
        const ThirdParty = Parse.Object.extend('ThirdParty');
        const query = new Parse.Query(ThirdParty);
        query.equalTo('email', email);
        const results = await query.find();
    
        return results.length > 0;
    }

    async addThirdPartyAccount(value: any, route: Router): Promise<void> {

        if (await this.alreadyRegistered(value.email) === true) {
            this.user = value;
            route.navigate(['/home']);
            return ;
        }
    
        const ThirdParty = Parse.Object.extend('ThirdParty');
        const user = new ThirdParty();

        user.set('name', value.username);
        user.set('surname', value.surname);
        user.set('email', value.email);
        user.set('platform', value.platform);

        user.save()
            .then((object: any) => alert(`${value.name} ${value.surname} Successfuly Registered`))
            .then((_: any) => {
                this.user = value;
                route.navigate(['/home']);
            })
            .catch((error: any) => alert(`Error: ${error.message}`));
    }
}
