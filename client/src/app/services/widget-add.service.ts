import { Injectable } from '@angular/core';

import { WidgetFactoryService, Widget } from './widget-factory.service';
import { GoogleService } from './google.service';
import { DialogService } from './dialog.service';
import { Back4AppService } from './back4-app.service';

@Injectable({
    providedIn: 'root'
})

export class WidgetAddService {

    constructor(
        private google: GoogleService,
        private dialog: DialogService,
        private factory: WidgetFactoryService,
        private readonly db: Back4AppService,
    ) { }

    configureWidget(widgets: Widget[], wName: string): void {
        if (wName !== 'liked videos' && wName !== 'statistics' && wName !== 'subs')
            this.addWidget(widgets, wName, undefined);
        else {
            if (this.google.getScopes.includes('youtube') === true)
                this.dialog.openDialog(wName).then(opt => { 
                    if (opt)
                        this.addWidget(widgets, wName, opt);
                });
            else
                this.subscribeAndConfigure(widgets, wName);
        }
    }

    private subscribeAndConfigure(widgets: Widget[], wName: string) {
        this.google.signInYt().then(
            auth => auth.subscribe(
                (user) => {
                    if (this.db.getUser.id !== undefined) {
                        this.google.setUser = user;
                        this.dialog.openDialog(wName).then(opt => {
                            if (opt)
                                this.addWidget(widgets, wName, opt)
                        })
                    }
                }
            )
        );
    }

    private addWidget = async (widgets: Widget[], wName: string, options: any) => widgets.push(await this.factory.createWidget(wName, options));

}
