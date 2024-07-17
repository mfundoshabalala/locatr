import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-content-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.css'],
})
export class ContentHeaderComponent implements OnInit {
  pageTitle = 'Default Title';
  pageSubtitle = 'Default Subtitle';

  constructor(private titleService: Title, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        mergeMap((route) => route.data)
      )
      .subscribe((data) => {
        this.pageTitle = data['title'] || 'Default Title';
        this.pageSubtitle = data['subtitle'] || 'Default Subtitle';
        this.titleService.setTitle(this.pageTitle);
      });

    // Set the initial title and subtitle when the component initializes
    this.setInitialTitleAndSubtitle();
  }

  private setInitialTitleAndSubtitle() {
    const currentRoute = this.activatedRoute.snapshot;
    let route = currentRoute;
    while (route.firstChild) {
      route = route.firstChild;
    }
    const initialTitle = route.data['title'] || 'Default Title';
    const initialSubtitle = route.data['subtitle'] || 'Default Subtitle';
    this.pageTitle = initialTitle;
    this.pageSubtitle = initialSubtitle;
    this.titleService.setTitle(initialTitle);
  }
}