import { Injectable } from '@angular/core';
import { SocialAuthService } from "angularx-social-login";
import { Router } from '@angular/router';
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";

import { Back4AppService } from './back4-app.service';

@Injectable({
    providedIn: 'root'
})

export class GoogleService {

    private youtubeOption = { scope: 'profile email https://www.googleapis.com/auth/youtube.readonly' };
    private loginOption = { scope: 'profile email' };

    private user: SocialUser | undefined = undefined;
    private scopes: string = 'none';

    constructor(
        private authService: SocialAuthService,
        private db: Back4AppService,
        private route: Router
    ) { }

    signIn(): void {
        this.authService.signIn(GoogleLoginProvider.PROVIDER_ID, this.loginOption)
            .then(_ => this.authService.authState.subscribe((user) => {
                this.user = user;
                this.scopes = this.loginOption.scope;

                this.db.addThirdPartyAccount({
                    username: this.user.firstName,
                    surname: this.user.lastName,
                    email: this.user.email,
                    platform: 'google',
                }, this.route);
            }))
            .catch(error => alert(`Error: ${error.status}`));
    }

    async signInYt() {
        await this.authService.signIn(GoogleLoginProvider.PROVIDER_ID, this.youtubeOption);
        this.scopes = this.youtubeOption.scope;
        return this.authService.authState;
    }

    async signOut(): Promise<void> {
        this.scopes = 'none';
        if (this.user != null && this.user != undefined)
            await this.authService.signOut();
    }

    set setUser(u: SocialUser) {
        this.user = u;
    }

    get getUser() {
        return this.user;
    }

    get getScopes() {
        return this.scopes;
    }

}
