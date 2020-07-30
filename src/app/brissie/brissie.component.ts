import {
    Component, OnInit
} from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'brissie-award',
    templateUrl: './brissie.component.html',
    styleUrls: ['./brissie.component.scss']
})
export class BrissieComponent implements OnInit {

    constructor(private titleSvc: Title) { }

    public ngOnInit() {
        this.titleSvc.setTitle('North Augusta Sports Hall of Fame');
    }
}
