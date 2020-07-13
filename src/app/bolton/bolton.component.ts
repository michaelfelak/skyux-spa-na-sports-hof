import {
    Component, OnInit
} from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'bolton-award',
    templateUrl: './bolton.component.html'
})
export class BoltonComponent implements OnInit {

    constructor(private titleSvc: Title) { }

    public ngOnInit() {
        this.titleSvc.setTitle('North Augusta Sports Hall of Fame');
    }
}
