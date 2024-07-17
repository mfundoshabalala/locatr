import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { filter, map, mergeMap } from 'rxjs/operators';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import { Search, SearchBoxComponent } from "../search-box/search-box.component";

@Component({
  selector: 'app-content-header',
  standalone: true,
  imports: [CommonModule, SearchBoxComponent],
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.css'],
})
export class ContentHeaderComponent implements OnInit {
  pageTitle = 'Default Title';
  pageSubtitle = 'Default Subtitle';
  searchType: Search = 'list';
  showSearchBox = false;

  constructor(
    private router: Router,
    private titleService: Title,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.setupRouterEventsSubscription();
    this.setInitialTitleAndSubtitle();
  }

  /**
   * Subscribes to router events to update the page title and subtitle
   * based on the current route's data.
   */
  private setupRouterEventsSubscription(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => this.getPrimaryRoute(route)),
        filter((route) => route.outlet === 'primary'),
        mergeMap((route) => route.data)
      )
      .subscribe((data) => this.updatePageInfo(data));
  }

  /**
   * Updates the page title, subtitle, and search type based on the provided route data.
   *
   * @param data - The data from the route.
   */
  private updatePageInfo(data: any): void {
    this.searchType = data['searchType'] || 'none';
    this.pageTitle = data['title'] || 'Default Title';
    this.pageSubtitle = data['subtitle'] || 'Default Subtitle';
    this.titleService.setTitle(this.pageTitle);
  }

  /**
   * Sets the initial title and subtitle based on the current route's data
   * when the component initializes.
   */
  private setInitialTitleAndSubtitle(): void {
    const currentRoute = this.activatedRoute.snapshot;
    const route = this.getPrimaryRoute(currentRoute);
    const initialTitle = route.data['title'] || 'Default Title';
    const initialSubtitle = route.data['subtitle'] || 'Default Subtitle';
    const initialSearchType = route.data['searchType'] || 'none';
    this.pageTitle = initialTitle;
    this.pageSubtitle = initialSubtitle;
    this.searchType = initialSearchType;
    this.titleService.setTitle(initialTitle);
  }

  /**
   * Recursively retrieves the primary route.
   *
   * @param route - The current activated route.
   * @returns The primary route.
   */
  private getPrimaryRoute(routeSnapshot: any): any {
    let route = routeSnapshot;
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route;
  }
}