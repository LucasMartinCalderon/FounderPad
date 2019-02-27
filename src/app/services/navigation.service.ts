import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService implements OnInit {

  private destinationSubject = new BehaviorSubject<string>('home');
  destination$ = this.destinationSubject.asObservable();

  constructor(
    private router: Router
  ) {
    router.events.subscribe(event => {

      if (event instanceof NavigationEnd) {
        console.log('current url', event.url); // event.url has current url
        switch (event.url) {
          case '/startups':
            this.updateDestination('startups');
            break;
          case '/create':
            this.updateDestination('create');
            break;
          case '/home':
            this.updateDestination('home');
            break;
          case '/myteam':
            this.updateDestination('myteam');
            break;
          case '/messages':
            this.updateDestination('messages');
            break;
        }
      }
    });
  }

  ngOnInit() {

  }

  updateDestination(destination: string) {
    this.destinationSubject.next(destination);
  }
}
