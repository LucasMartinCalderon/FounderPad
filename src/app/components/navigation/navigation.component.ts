import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(
    private router: Router,
    private navService: NavigationService
  ) { }

  destination$ = this.navService.destination$;

  ngOnInit() {
  }

  route(destination: string) {
    this.router.navigate([destination]);
    this.navService.updateDestination(destination);
  }

}
