import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewEncapsulation } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-startups',
  templateUrl: './startups.component.html',
  styleUrls: ['./startups.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class StartupsComponent implements OnInit {

  startups = [
    {
      name: 'Assetize1',
      sector: 'Finance',
      positions: [
        'Java Developer',
        'UI/UX'
      ],
      location: 'Exeter'
    },
    {
      name: 'Assetize2',
      sector: 'Finance',
      positions: [
        'Java Developer',
        'UI/UX',
        'Marketing',
        'Python Developer',
        'SEO'
      ],
      location: 'Exeter'
    },
    {
      name: 'Assetize3',
      sector: 'Finance',
      positions: [
        'Java Developer',
        'UI/UX',
      ],
      location: 'Exeter'
    }
  ];

  constructor(
    private router: Router,
    private navService: NavigationService
  ) { }

  ngOnInit() {
  }

  route(destination: string) {
    this.router.navigate([destination]);
  }

  viewProject(id: string) {
    this.router.navigate(['startups', id]);
  }

}
