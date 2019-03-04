import { Component, OnInit, Inject, NgZone, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, take } from 'rxjs/operators';
import { StartupService } from '../../services/startup.service';
import { Observable } from 'rxjs';

import { Startup } from '../../models/startup';

import { ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';

export interface DialogData {
  position: string;
  startupName: string;
}

@Component({
  selector: 'app-startup-view',
  templateUrl: './startup-view.component.html',
  styleUrls: ['./startup-view.component.css'],
})
export class StartupViewComponent implements OnInit {

  startup: Startup;
  paramSub: any;
  id: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private startupService: StartupService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.paramSub = this.route.params.subscribe(params => {
      this.id = params.id;
      this.startupService.getStartup(params.id).subscribe(startup => {
        this.startup = startup;
      });
    });
  }

  apply(position: string) {
    const dialogRef = this.dialog.open(ApplyPopupComponent, {
      width: '70%',
      height: '70%',
      data: {
        position,
        startupName: this.startup.name
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

@Component({
  selector: 'app-popup-dialog',
  templateUrl: 'apply-dialog.component.html',
  styleUrls: ['./apply-dialog.component.css'],
})
export class ApplyPopupComponent {

  @ViewChild('autosize') autosize: CdkTextareaAutosize;

  constructor(
    public dialogRef: MatDialogRef<ApplyPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private ngZone: NgZone) { }

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this.ngZone.onStable.pipe(take(1))
      .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
