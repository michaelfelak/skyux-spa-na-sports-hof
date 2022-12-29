import {
  Component, Input, OnInit
} from '@angular/core';

import { SkyAppAssetsService } from '@skyux/assets';
import { SkyFlyoutService, SkyFlyoutInstance, SkyFlyoutConfig } from '@skyux/flyout';
import { InducteeFlyoutContext } from '../inductee-flyout/inductee-flyout.context';
import { InducteeFlyoutComponent } from '../inductee-flyout/inductee-flyout.component';
import { Inductee } from '../../shared/inductee';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

let inductees = require('../inductees.json');

@Component({
  selector: 'inductee-card',
  templateUrl: './inductee-card.component.html',
  styleUrls: ['./inductee-card.component.scss']
})

export class InducteeCardComponent implements OnInit {
  @Input() public id: string;
  @Input() public firstname: string;
  @Input() public lastname: string;
  @Input() public image: string;
  @Input() public year: string;
  public showFlyout: boolean = true;
  private data: any = inductees.inductees;
  private inductee: Inductee;
  public imagePath: string;
  public rowHighlightedId: string;
  public flyout: SkyFlyoutInstance<any>;
  public bio: string;
  public allURLs: any;
  public bioPresent: boolean;
  // private openFlyoutStream = new Subject<boolean>();
  constructor(private assetSvc: SkyAppAssetsService,
    private flyoutService: SkyFlyoutService,
    private http: HttpClient) { }

  public ngOnInit() {
    this.allURLs = this.assetSvc.getAllUrls();
    this.inductee = this.getInducteeById(this.id);
    this.imagePath = this.assetSvc.getUrl('img/hof/' + this.image + '/profile.jpg');
    this.bio = this.assetSvc.getUrl('bio/' + this.image + '.txt');

    this.getBio().subscribe((result: any) => {
      this.bioPresent = true;
    },
      (err: Error) => {
        this.bioPresent = false;
      });
  }

  public onNameClick(id: string) {
    let record = this.getRecordFromInductee(this.inductee);
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

  private getInducteeById(id: string) {
    return this.data.filter((i: { id: string; }) => {
      return i.id === id;
    })[0];
  }

  private getRecordFromInductee(inductee: Inductee): InducteeFlyoutContext {
    if (inductee) {
      let record = new InducteeFlyoutContext();
      record.image = this.image;
      record.firstname = inductee.firstname;
      record.lastname = inductee.lastname;
      record.year = inductee.year;
      record.recordId = inductee.id;
      record.images = this.getImages(this.image);
      return record;
    }
    return undefined;
  }

  private getImages(path: string): string[] {
    let output = [];
    for (let record in this.allURLs) {
      if (record.startsWith('img/hof/' + path)) {
        output.push(record);
      }
    }
    return output;
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

  private getBio(): Observable<any> {
    return this.http.get<any>(this.assetSvc.getUrl('bio/' + this.image + '.json'));
  }
}
