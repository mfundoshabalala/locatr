import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { filter, map, mergeMap } from 'rxjs/operators';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import { Search, SearchBoxComponent } from "../search-box/search-box.component";
import { OffcanvasComponent } from '../offcanvas/offcanvas.component';

@Component({
  selector: 'app-content-header',
  standalone: true,
  imports: [CommonModule, SearchBoxComponent, OffcanvasComponent],
  template: `
    <header>
      <div class="prose text-pretty">
        <h2 class="mb-1">{{ pageTitle }}</h2>
        <h3>{{ pageSubtitle }}</h3>
      </div>
      <div>
        @if (showSearchBox) {
        <app-search-box [type]="searchType" />
        } @if (showCreateButton) {
        <button (click)="offcanvas.openOffcanvas()" class="btn capitalize">{{ title }}</button>
        <app-offcanvas #offcanvas [title]="title" [entityName]="entityName"></app-offcanvas>
        }
      </div>
    </header>
  `,
  styleUrls: ['./content-header.component.css'],
})
export class ContentHeaderComponent implements OnInit {
  @ViewChild('offcanvas') offcanvas!: OffcanvasComponent;

  pageTitle = 'Default Title';
  pageSubtitle = 'Default Subtitle';
  searchType: Search = 'list';
  showSearchBox = false;
  showCreateButton = false;
  title = '';
  entityName = '';

  constructor(private router: Router, private titleService: Title, private activatedRoute: ActivatedRoute) {}

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
    this.title = 'Add ' + data['entityName'];
    if (data['entityName'] !== undefined) {
      this.entityName = data['entityName'];
      this.showCreateButton = true;
    }
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
    const title = 'Add ' + route.data['entityName'];
    if (route.data['entityName'] !== undefined) {
      this.entityName = route.data['entityName'];
      this.showCreateButton = true;
    }
    this.title = title;
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