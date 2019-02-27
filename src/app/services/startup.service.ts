import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Startup } from '../models/startup';

@Injectable({
  providedIn: 'root'
})
export class StartupService {

  testString = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dolor libero, commodo semper euismod sed, tincidunt in elit. Sed ut gravida risus. Donec molestie purus nec urna porttitor maximus. Pellentesque condimentum, ipsum nec porta vestibulum, nulla mi condimentum purus, eget posuere lorem metus ut sem. In faucibus laoreet ligula ac feugiat. Fusce sit amet est purus. Nulla ut risus vitae magna facilisis hendrerit. Cras eget turpis eget mi tempus maximus nec at quam. Interdum et malesuada fames ac ante ipsum primis in faucibus./n

  Phasellus neque dui, dictum sed hendrerit id, eleifend at metus.Etiam pellentesque nibh nec laoreet auctor.Donec et justo quam.Mauris eget justo facilisis, blandit ex in, pulvinar ligula.Quisque aliquam ac sem id tristique.Sed pulvinar tincidunt mi sit amet mattis.Cras ac odio a turpis consectetur commodo quis in orci./n
  
  Quisque egestas sodales fermentum.Nullam augue dui, faucibus ut auctor at, rutrum eget lacus.Mauris elementum finibus velit eu rutrum.Cras non sapien massa.Suspendisse potenti.Quisque consectetur metus tellus, a blandit turpis gravida a.Ut commodo non lacus at porttitor.Mauris lobortis pretium dui, in sodales orci placerat quis.Quisque convallis id turpis in tempus.`;

  tempStartup: Startup = {
    name: 'Assetize',
    positions: [
      {
        name: 'Java Developer',
        description: this.testString
      },
      {
        name: 'UI/UX',
        description: this.testString
      },
      {
        name: 'Marketing',
        description: this.testString
      }],
    location: 'Exeter',
    description: this.testString
  };

  constructor() { }

  getStartup(id: string): Observable<Startup> {
    return Observable.create((observer) => {
      observer.next(this.tempStartup);
    });
  }
}
