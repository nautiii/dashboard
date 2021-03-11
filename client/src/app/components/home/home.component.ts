import { Component, OnInit } from '@angular/core';

import { Back4AppService } from '../../services/back4-app.service';
import { GoogleService } from '../../services/google.service';
import { Widget } from '../../services/widget-factory.service';
import { WidgetAddService } from '../../services/widget-add.service';
import { WidgetTreeService } from '../../services/widget-tree.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

    user: any;
    widgets: Widget[] = [];
    tree = this.wTree;

    async signOut(): Promise<void> {
        await this.db.signOut();
        await this.google.signOut();
    }

    newWidget = (wName: string): void => this.add.configureWidget(this.widgets, wName);
    setUser = async () => this.user = JSON.parse(JSON.stringify(await this.db.currentUser()));

    constructor(
        private db: Back4AppService,
        private add: WidgetAddService,
        private readonly wTree: WidgetTreeService,
        private google: GoogleService
    ) { }

    ngOnInit() {
        this.setUser();
    }

}