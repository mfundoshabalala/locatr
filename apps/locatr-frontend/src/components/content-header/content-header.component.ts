import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-content-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-header.component.html',
  styleUrl: './content-header.component.css',
})
export class ContentHeaderComponent implements OnInit {
  pageTitle = 'Dashboard';
  pageSubtitle = '';

  constructor(private title: Title) {}

  ngOnInit(): void {
    this.pageTitle = this.title.getTitle();
  }
}
