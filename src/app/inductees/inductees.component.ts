import {
  Component
} from '@angular/core';
import { InducteeList } from './inductee-list';

@Component({
  selector: 'inductees-page',
  templateUrl: './inductees.component.html',
  styleUrls: ['./inductees.component.scss']
})

export class InducteesComponent {
  public inductees: any;
  constructor(private inducteeList: InducteeList) {
    this.inductees = this.inducteeList.inductees;
  }

  public getInductees() {
    return this.inducteeList.inductees;
  }
}
