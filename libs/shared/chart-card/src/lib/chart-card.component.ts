import { Component, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'lib-chart-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-4 rounded-md shadow">
      <h3 class="text-2xl m-0">{{ chartTitle }}</h3>
      <canvas #chart></canvas>
    </div>
  `,
  styles: [`
  /* Set a fixed height or max-height for the canvas */
  canvas {
    height: 400px; /* or max-height: 400px; */
    width: 100%; /* Ensure the width is responsive */
    max-height: 400px; /* Ensure the canvas doesn't grow beyond this height */
  }
  `],
})
export class ChartCardComponent implements AfterViewInit {
  @Input() chartTitle!: string;
  @Input() chartData!: any;
  @Input() chartOptions!: any;
  @ViewChild('chart') chartRef!: ElementRef<HTMLCanvasElement>;

  private chartInstance!: Chart;

  ngAfterViewInit(): void {
    this.initializeChart();
  }

  private initializeChart() {
    this.chartInstance = new Chart(this.chartRef.nativeElement, {
      type: this.chartData.type || 'bar', // Default to 'bar' if not provided
      data: this.chartData,
      options: this.chartOptions,
    });
  }
}