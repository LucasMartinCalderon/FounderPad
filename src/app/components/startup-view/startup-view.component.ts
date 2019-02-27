import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { StartupService } from '../../services/startup.service';
import { Observable } from 'rxjs';

import { Startup } from '../../models/startup';

import { ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  animal: string;
  name: string;
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

  apply() {
    const dialogRef = this.dialog.open(ApplyPopupComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

@Component({
  selector: 'app-popup-dialog',
  templateUrl: 'apply-dialog.html',
})
export class ApplyPopupComponent {

  constructor(
    public dialogRef: MatDialogRef<ApplyPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
