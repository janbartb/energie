import { Component, inject } from '@angular/core';
import { Headers } from '../../services/headers';
import { Base } from '../../base/base';

@Component({
    selector: 'app-page-header',
    imports: [],
    templateUrl: './page-header.html',
    styleUrl: './page-header.css',
})
export class PageHeader extends Base {

    homeClicked() {
        this.gotoHome();
    }

    seizoenClicked() {
        if (this.router.url == 'seizoen') {
            return;
        }
        //this.goBackToPage('seizoen');
    }

}
