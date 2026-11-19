import { Component, inject } from '@angular/core';
import { Dao } from '../services/dao';
import { Router } from '@angular/router';
import { Alerts } from '../services/alerts';
import { Headers } from '../services/headers';

@Component({
    selector: 'app-base',
    imports: [],
    templateUrl: './base.html',
    styleUrl: './base.css',
})
export class Base {
    dao = inject(Dao);
    router = inject(Router);
    header = inject(Headers);
    alert = inject(Alerts);
    dialogVisible: boolean = false;
    dialogTitle: string = '';

    gotoHome() {
        this.router.navigate(['home']);
    }

    ngOnInit(): void {
        const urls = sessionStorage.getItem('urls');
        if (!urls) {
            this.router.navigate(['home']);
            return;
        }
        const seiz = sessionStorage.getItem('seizoen');
        this.header.seizoen = seiz ? seiz : '';
    }

}
