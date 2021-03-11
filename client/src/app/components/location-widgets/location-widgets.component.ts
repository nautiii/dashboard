import { Component, OnInit, Input, IterableDiffer, IterableDiffers, DoCheck } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { WeatherService } from '../../services/weather.service';
import { Widget } from '../../services/widget-factory.service';

@Component({
    selector: 'app-location-widgets',
    templateUrl: './location-widgets.component.html',
    styleUrls: ['./location-widgets.component.css']
})

export class LocationWidgetsComponent implements OnInit, DoCheck {

    form: any[] = [];
    position: any[] = [];
    @Input() widgets: Widget[] = [];
    private _diff!: IterableDiffer<Widget>;

    constructor(
        private _iterableDiffers: IterableDiffers,
        private formBuilder: FormBuilder,
        private WeatherService: WeatherService
    ) { }

    ngDoCheck() {
        const changes = this._diff.diff(this.widgets);

        if (changes) {
            if (this.widgets.length > this.form.length)
                this.form.push(this.formBuilder.group({
                    location: ['', Validators.required]
                }));
        }
    }

    sendLocation(index: number) {
        this.WeatherService
            .getWeather(this.form[index].value.location)
            .subscribe(data => this.position[index] = data);
    }

    delWidget = (index: number) => this.widgets.splice(index, 1);

    ngOnInit() {
        this._diff = this._iterableDiffers.find(this.widgets).create();
    }

}