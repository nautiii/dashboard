import { Injectable } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { HomeDialogComponent } from '../components/home-dialog/home-dialog.component';

@Injectable({
    providedIn: 'root'
})

export class DialogService {

    constructor(public dialog: MatDialog) { }

    async openDialog(wName: string): Promise<any> {
        const dialogRef = this.dialog.open(HomeDialogComponent, {
            width: '350px',
            height: '200px',
            data: wName
        });

        return await dialogRef.afterClosed().toPromise();
    }
}
