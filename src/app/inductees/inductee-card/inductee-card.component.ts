import {
  Component, Input, OnInit
} from '@angular/core';

import { SkyAppAssetsService } from '@skyux/assets';
import { SkyFlyoutService, SkyFlyoutInstance, SkyFlyoutConfig } from '@skyux/flyout';
import { InducteeFlyoutContext } from '../inductee-flyout/inductee-flyout.context';
import { InducteeFlyoutComponent } from '../inductee-flyout/inductee-flyout.component';
// import { Subject } from 'rxjs';

@Component({
  selector: 'inductee-card',
  templateUrl: './inductee-card.component.html',
  styleUrls: ['./inductee-card.component.scss']
})

export class InducteeCardComponent implements OnInit {
  @Input() public id: string;
  @Input() public name: string;
  @Input() public image: string;
  @Input() public year: string;
  public imagePath: string;
  public rowHighlightedId: string;
  public flyout: SkyFlyoutInstance<any>;
  // private openFlyoutStream = new Subject<boolean>();
  constructor(private assetSvc: SkyAppAssetsService,
    private flyoutService: SkyFlyoutService) { }

  public ngOnInit() {
    this.imagePath = this.assetSvc.getUrl('img/hof/' + this.image + '/profile.jpg');
  }

  public onNameClick(id: string) {
    let record: InducteeFlyoutContext = new InducteeFlyoutContext();
    record.recordId = id;
    record.image = this.image;
    record.name = this.name;
    record.year = this.year;
    // this.openRecord(record);

    const flyoutConfig: SkyFlyoutConfig = {
      // showIterator: true,
      providers: [{
        provide: InducteeFlyoutContext,
        useValue: record
      }],
      defaultWidth: 500
    };
    this.flyout = this.flyoutService.open(InducteeFlyoutComponent, flyoutConfig);
    // this.flyout.iteratorNextButtonClick.subscribe(() => {
    //   record.recordId = record.recordId + 1;
    //   console.log(record.recordId);
    // });

    // this.flyout.iteratorPreviousButtonClick.subscribe(() => {
    // });
    this.flyout.closed.subscribe(() => {
      this.flyout = undefined;
    });
  }

  // private openRecord(record: InducteeFlyoutContext) {
  //   // Prevent highlight from being prematurely removed.
  //   this.openFlyoutStream.next(true);

  //   const flyoutConfig: SkyFlyoutConfig = {
  //     providers: [{
  //       provide: InducteeFlyoutContext,
  //       useValue: record
  //     }],
  //     showIterator: true
  //   };

  //   this.flyout = this.flyoutService.open(InducteeFlyoutComponent, flyoutConfig);

  //   this.flyout.closed.subscribe(() => {
  //     this.flyout = undefined;
  //   });

  //   this.initIterators(record, this.flyout);
  // }

  // private initIterators(record: any, flyout: SkyFlyoutInstance<any>) {
  //   this.rowHighlightedId = record.id;

  //   // Remove highlights when flyout is closed.
  //   flyout.closed
  //     .takeUntil(this.openFlyoutStream)
  //     .subscribe(() => {
  //       this.rowHighlightedId = undefined;
  //     });

  //   flyout.iteratorPreviousButtonClick
  //     .takeUntil(this.openFlyoutStream)
  //     .subscribe(() => {
  //       const previous = this.stepToItemInArray(this.listState, this.rowHighlightedId, -1);
  //       this.openRecord(previous.data);
  //     });

  //   flyout.iteratorNextButtonClick
  //     .takeUntil(this.openFlyoutStream)
  //     .subscribe(() => {
  //       const next = this.stepToItemInArray(this.listState, this.rowHighlightedId, 1);
  //       this.openRecord(next.data);
  //     });

  //   flyout.iteratorPreviousButtonDisabled = this.isFirstElementInArray(this.rowHighlightedId, this.listState);
  //   flyout.iteratorNextButtonDisabled = this.isLastElementInArray(this.rowHighlightedId, this.listState);
  // }

  // private stepToItemInArray(array: Array<any>, currentId: string, step: number) {
  //   for (let i = 0; i < array.length; i++) {
  //     if (array[i].id === currentId) {
  //       return array[i + step];
  //     }
  //   }
  // }

  // private isFirstElementInArray(id: any, array: any[]) {
  //   const element = array.find(x => x.id === id);
  //   if (array[0] === element) {
  //     return true;
  //   }
  //   return false;
  // }

  // private isLastElementInArray(id: any, array: any[]) {
  //   const element = array.find(x => x.id === id);
  //   if (array[array.length - 1] === element) {
  //     return true;
  //   }
  //   return false;
  // }
}
