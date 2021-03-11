import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { GoogleService } from './google.service';

@Injectable({
    providedIn: 'root'
})

export class YoutubeService {

    private gUser: any;
    private key: string = 'AIzaSyCeUbBmI7vQ28JRp_kMYyAKbSyjp4Ib0zk';

    constructor(
        private http: HttpClient,
        private google: GoogleService,
    ) { }

    private update(): void {
        this.gUser = this.google.getUser;
    }

    getChannelStats() {
        this.update();

        let opts = {
            responseType: 'json' as const,
            params: new HttpParams()
                .set('part', 'snippet,contentDetails,statistics')
                .set('mine', 'true')
                .set('key', this.key),
            headers: new HttpHeaders()
                .set('Authorization', `Bearer ${(this.gUser != undefined) ? this.gUser.authToken : ''}`)
                .set('Accept', 'application/json')
        };

        return this.http.get('https://youtube.googleapis.com/youtube/v3/channels', opts);
    }

    getLikedVideos() {
        this.update();

        let opts = {
            responseType: 'json' as const,
            params: new HttpParams()
                .set('part', 'snippet,statistics')
                .set('myRating', 'like')
                .set('maxResults', '20')
                .set('key', this.key),
            headers: new HttpHeaders()
                .set('Authorization', `Bearer ${(this.gUser != undefined) ? this.gUser.authToken : ''}`)
                .set('Accept', 'application/json')
        };

        return this.http.get('https://youtube.googleapis.com/youtube/v3/videos', opts);
    }

    getChannelSubs() {
        this.update();

        let opts = {
            responseType: 'json' as const,
            params: new HttpParams()
                .set('part', 'snippet,contentDetails')
                .set('mine', 'true')
                .set('key', this.key)
                .set('maxResults', '50'),
            headers: new HttpHeaders()
                .set('Authorization', `Bearer ${(this.gUser != undefined) ? this.gUser.authToken : ''}`)
                .set('Accept', 'application/json')
        };

        return this.http.get('https://youtube.googleapis.com/youtube/v3/subscriptions', opts);
    }

}
