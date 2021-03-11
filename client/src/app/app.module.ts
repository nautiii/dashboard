import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';

import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTreeModule } from '@angular/material/tree';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';

import {
    GoogleLoginProvider,
    SocialLoginModule,
    SocialAuthServiceConfig
} from 'angularx-social-login';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutComponent } from './components/about/about.component';
import { YoutubeWidgetsComponent } from './components/youtube-widgets/youtube-widgets.component';
import { WeatherWidgetsComponent } from './components/weather-widgets/weather-widgets.component';
import { HomeDialogComponent } from './components/home-dialog/home-dialog.component';
import { LocationWidgetsComponent } from './components/location-widgets/location-widgets.component';
import { CurrencyWidgetsComponent } from './components/currency-widgets/currency-widgets.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        SignupComponent,
        NotFoundComponent,
        AboutComponent,
        YoutubeWidgetsComponent,
        WeatherWidgetsComponent,
        HomeDialogComponent,
        LocationWidgetsComponent,
        CurrencyWidgetsComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        MatTabsModule,
        MatIconModule,
        MatToolbarModule,
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        MatSidenavModule,
        MatTreeModule,
        MatDialogModule,
        MatSlideToggleModule,
        SocialLoginModule,
        DragDropModule
    ],
    providers: [
        {
            provide: 'SocialAuthServiceConfig',
            useValue: {
                autoLogin: false,
                providers: [
                    {
                        id: GoogleLoginProvider.PROVIDER_ID,
                        provider: new GoogleLoginProvider('610393783522-2f0prlu4kfn1ddt5t58ad8qkgt2jv26p.apps.googleusercontent.com')
                    }
                ]
            } as SocialAuthServiceConfig,
        }
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
