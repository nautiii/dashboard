import { Component, Input, OnInit, IterableDiffer, IterableDiffers, DoCheck } from '@angular/core';
import { Widget } from '../../services/widget-factory.service';

interface ImageIndex {
    value: number;
    max: number;
}

@Component({
    selector: 'app-youtube-widgets',
    templateUrl: './youtube-widgets.component.html',
    styleUrls: ['./youtube-widgets.component.css'],
})

export class YoutubeWidgetsComponent implements OnInit, DoCheck {

    iIndex: Map<number, ImageIndex> = new Map();
    iIndexVideo: Map<number, ImageIndex> = new Map();

    @Input() public widgets: Widget[] = [];
    private _diff!: IterableDiffer<Widget>;

    ngDoCheck() {
        const changes = this._diff.diff(this.widgets);

        if (changes) {
            if (this.widgets.length > 0 && this.widgets[this.widgets.length - 1].name === 'SUBSCRIPTIONS')
                this.iIndex.set(this.widgets.length - 1, {
                    value: 0,
                    max: this.widgets[this.widgets.length - 1].infos.items.length
                });
            if (this.widgets.length > 0 && this.widgets[this.widgets.length - 1].name === 'LIKED VIDEOS')
                this.iIndexVideo.set(this.widgets.length - 1, {
                    value: 0,
                    max: this.widgets[this.widgets.length - 1].infos.length
                });
        }
    }

    constructor(private _iterableDiffers: IterableDiffers) { }

    ngOnInit(): void {
        this._diff = this._iterableDiffers.find(this.widgets).create();
    }

    delWidget = (index: number) => this.widgets.splice(index, 1);

    next = (index: number) => {
        const infos = this.iIndex.get(index);
        if (infos != undefined)
            this.iIndex.set(index, {
                value: (infos.value < infos.max - 1) ? infos.value + 1 : 0,
                max: infos.max,
            });
    }
    prev = (index: number) => {
        const infos = this.iIndex.get(index);
        if (infos != undefined)
            this.iIndex.set(index, {
                value: (infos.value > 0) ? infos.value - 1 : infos.max - 1,
                max: infos.max,
            });
    }
    nextVideo = (index: number) => {
        const infos = this.iIndexVideo.get(index);
        if (infos != undefined)
            this.iIndexVideo.set(index, {
                value: (infos.value < infos.max - 1) ? infos.value + 1 : 0,
                max: infos.max,
            });
    }
    prevVideo = (index: number) => {
        const infos = this.iIndexVideo.get(index);
        if (infos != undefined)
            this.iIndexVideo.set(index, {
                value: (infos.value > 0) ? infos.value - 1 : infos.max - 1,
                max: infos.max,
            });
    }

    getSnippet = (index: number, widget: Widget) => {
        const infos = this.iIndex.get(index);
        return infos != undefined ? widget.infos.items[infos.value].snippet : {};
    }

    getItem = (index: number, widget: Widget) => {
        const infos = this.iIndexVideo.get(index);
        return infos != undefined ? widget.infos[infos.value] : {};
    }

}
