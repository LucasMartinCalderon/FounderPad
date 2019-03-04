import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-my-team',
  templateUrl: './my-team.component.html',
  styleUrls: ['./my-team.component.css']
})
export class MyTeamComponent implements OnInit {

  @ViewChild('autosize') autosize: CdkTextareaAutosize;

  startup = {
    name: 'Assetize',
    location: 'Exeter',
    description: 'Description goes here:'
  };

  testString = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dolor libero, commodo semper euismod sed, tincidunt in elit. Sed ut gravida risus. Donec molestie purus nec urna porttitor maximus. Pellentesque condimentum, ipsum nec porta vestibulum, nulla mi condimentum purus, eget posuere lorem metus ut sem. In faucibus laoreet ligula ac feugiat. Fusce sit amet est purus. Nulla ut risus vitae magna facilisis hendrerit. Cras eget turpis eget mi tempus maximus nec at quam. Interdum et malesuada fames ac ante ipsum primis in faucibus`;



  posts = [
    {
      author: 'Patrick Collings',
      time: '13 hrs',
      content: this.testString,
      comments: [
        {
          author: 'Lucas Martin Calderon',
          body: 'Cool Post'
        },
        {
          author: 'Lucas Martin Calderon',
          body: 'Wow super interesting'
        }
      ]
    },
    {
      author: 'Patrick Collings',
      time: '13 hrs',
      content: 'Post Content Goes here:',
      comments: [
        {
          author: 'Lucas Martin Calderon',
          body: 'Cool Post'
        },
        {
          author: 'Lucas Martin Calderon',
          body: 'Cool Post'
        },
        {
          author: 'Lucas Martin Calderon',
          body: 'Cool Post'
        }
      ]
    },
    {
      author: 'Patrick Collings',
      time: '13 hrs',
      content: 'Post Content Goes here:',
      comments: [
        {
          author: 'Lucas Martin Calderon',
          body: 'Cool Post'
        }
      ]
    }
  ];

  constructor(
    private ngZone: NgZone
  ) { }

  ngOnInit() {

  }

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this.ngZone.onStable.pipe(take(1))
      .subscribe(() => this.autosize.resizeToFitContent(true));
  }

}
