import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-home-dialog',
    templateUrl: './home-dialog.component.html',
    styleUrls: ['./home-dialog.component.css']
})

export class HomeDialogComponent implements OnInit {

    dataSet: any;

    constructor(
        public dialogRef: MatDialogRef<HomeDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: string
    ) {
        if (data === 'statistics')
            this.dataSet = {
                viewCount: false,
                subscriberCount: false,
                hiddenSubscriberCount: false,
                videoCount: false
            };
        else if (data === 'subs')
            this.dataSet = {
                totalResults: false,
                link: false,
                title: false
            };
        else
            this.dataSet = {
                channel: false,
                videoTitle: false,
                views: false
            };
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    ngOnInit(): void { }

}
