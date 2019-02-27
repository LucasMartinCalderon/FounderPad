import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { StartupService } from '../../services/startup.service';
import { Observable } from 'rxjs';

import { Startup } from '../../models/startup';

import { ViewEncapsulation } from '@angular/core';

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
    private startupService: StartupService
  ) { }

  ngOnInit() {
    this.paramSub = this.route.params.subscribe(params => {
      this.id = params.id;
      this.startupService.getStartup(params.id).subscribe(startup => {
        this.startup = startup;
      });
    });
  }

}
