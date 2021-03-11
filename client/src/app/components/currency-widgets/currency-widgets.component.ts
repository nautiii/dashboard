import { Component, OnInit, Input, IterableDiffer, IterableDiffers, DoCheck } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { CurrencyService } from '../../services/currency.service';
import { Widget } from '../../services/widget-factory.service';

@Component({
    selector: 'app-currency-widgets',
    templateUrl: './currency-widgets.component.html',
    styleUrls: ['./currency-widgets.component.css']
})

export class CurrencyWidgetsComponent implements OnInit, DoCheck {

    form: any[] = [];
    conversion: any[] = [];
    @Input() widgets: Widget[] = [];
    private _diff!: IterableDiffer<Widget>;

    constructor(
        private _iterableDiffers: IterableDiffers,
        private CurrencyService: CurrencyService,
        private formBuilder: FormBuilder
    ) { }

    ngDoCheck() {
        const changes = this._diff.diff(this.widgets);

        if (changes) {
            if (this.widgets.length > this.form.length)
                this.form.push(this.formBuilder.group({
                    currency: ['', Validators.required]
                }));
        }
    }

    ngOnInit() {
        this._diff = this._iterableDiffers.find(this.widgets).create();
    }

    delWidget = (index: number) => this.widgets.splice(index, 1);

    sendConversion(index: number) {
        this.CurrencyService
            .getConversion(this.form[index].value.currency)
            .subscribe(data => this.conversion[index] = data);
    }

    sort = (a: any, b: any) => {
        return a.key > b.key ? -1 : 1;
    }

}