import { Component, Input, OnInit, IterableDiffer, IterableDiffers, DoCheck } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { WeatherService } from '../../services/weather.service';
import { Widget } from '../../services/widget-factory.service';

@Component({
    selector: 'app-weather-widgets',
    templateUrl: './weather-widgets.component.html',
    styleUrls: ['./weather-widgets.component.css']
})

export class WeatherWidgetsComponent implements OnInit, DoCheck {

    form: any[] = [];
    weather: any[] = [];
    @Input() widgets: Widget[] = [];
    private _diff!: IterableDiffer<Widget>;

    ngDoCheck() {
        const changes = this._diff.diff(this.widgets);

        if (changes) {
            if (this.widgets.length > this.form.length)
                this.form.push(this.formBuilder.group({
                    location: ['', Validators.required]
                }));
        }

    }

    constructor(
        private _iterableDiffers: IterableDiffers,
        private formBuilder: FormBuilder,
        private WeatherService: WeatherService
    ) { }

    ngOnInit() {
        this._diff = this._iterableDiffers.find(this.widgets).create();
    }

    delWidget = (index: number) => this.widgets.splice(index, 1);

    sendWeather(index: number) {
        this.WeatherService
            .getWeather(this.form[index].value.location)
            .subscribe(data => this.weather[index] = data);
    }

}
