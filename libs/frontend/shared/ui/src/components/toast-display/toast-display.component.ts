import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'lib-toast-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast-display.component.html',
  styleUrls: ['./toast-display.component.css'],
})
export class ToastDisplayComponent implements OnChanges {
  @Input({ required: true }) type!: 'info' | 'success' | 'error' | 'warning';
  @Input({ required: true }) message = 'This is a message';

  readonly toastConfig = {
    info: {
      toastClass: 'bg-blue-100 border-blue-200',
      iconClass: 'text-blue-500',
      svgPath:
        'M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z',
    },
    success: {
      toastClass: 'bg-green-100 border-green-200',
      iconClass: 'text-teal-500',
      svgPath:
        'M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z',
    },
    error: {
      toastClass: 'bg-red-100 border-red-200',
      iconClass: 'text-red-500',
      svgPath:
        'M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z',
    },
    warning: {
      toastClass: 'bg-yellow-100 border-yellow-200',
      iconClass: 'text-yellow-500',
      svgPath:
        'M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z',
    },
  };

  get currentToastConfig() {
    return this.toastConfig[this.type];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['type']) {
      console.log('Toast type changed:', changes['type'].currentValue);
    }
    if (changes['message']) {
      console.log('Toast message changed:', changes['message'].currentValue);
    }
  }
}
