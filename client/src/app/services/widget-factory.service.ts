import { Injectable } from '@angular/core';

import { YoutubeService } from '../services/youtube.service';

export interface Widget {
    name: string,
    infos?: any,
    options?: any,
}

@Injectable({
    providedIn: 'root'
})

export class WidgetFactoryService {

    private handler: Map<string, (wName: string, wOptions: any) => Promise<Widget>> = new Map([
        ['statistics', this.createWidgetYTStats.bind(this)],
        ['subs', this.createWidgetYTSubs.bind(this)],
        ['liked videos', this.createWidgetYTLiked.bind(this)],
        ['weather', this.createWidgetWeatherInfo.bind(this)],
        ['location', this.createWidgetLocationInfo.bind(this)],
        ['converter', this.createWidgetCurrency.bind(this)],
    ]);

    async createWidget(wName: string, wOptions: any): Promise<Widget> {
        const funct = this.handler.get(wName);
        return (funct !== undefined) ? await funct(wName, wOptions) : { name: 'undefined' };
    }

    private async createWidgetYTStats(wName: string, wOptions: any): Promise<Widget> {
        const resp: any = await this.yt.getChannelStats().toPromise();

        return {
            name: 'STATISTICS',
            infos: (resp.items) ? {
                title: resp.items[0].snippet.title,
                icon: 'url("' + resp.items[0].snippet.thumbnails.default.url + '")',
                stats: resp.items[0].statistics,
            } : {
                    error: 'No data to display. Do you really have a youtube channel?'
                },
            options: wOptions
        };
    }

    private async createWidgetYTSubs(wName: string, wOptions: any): Promise<Widget> {
        const resp: any = await this.yt.getChannelSubs().toPromise();

        return {
            name: 'SUBSCRIPTIONS',
            infos: {
                items: resp.items,
                total: resp.pageInfo.totalResults,
            },
            options: wOptions
        };
    }

    private async createWidgetYTLiked(wName: string, wOptions: any): Promise<Widget> {
        const resp: any = await this.yt.getLikedVideos().toPromise();

        return {
            name: 'LIKED VIDEOS',
            infos: resp.items,
            options: wOptions
        };
    }

    private async createWidgetWeatherInfo(wName: string, wOptions: any): Promise<Widget> {
        return { name: wName }
    }

    private async createWidgetLocationInfo(wName: string, wOptions: any): Promise<Widget> {
        return { name: wName }
    }

    private async createWidgetCurrency(wName: string, wOptions: any): Promise<Widget> {
        return { name: wName }
    }

    constructor(
        private yt: YoutubeService,
    ) { }

}
