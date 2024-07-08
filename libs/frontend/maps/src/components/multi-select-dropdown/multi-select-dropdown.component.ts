import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ElementRef,
  Renderer2,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DriversInterface } from '../../interfaces';
import { ClickOutsideDirective } from '@profolio/frontend/shared/ui';

@Component({
  selector: 'lib-multi-select',
  standalone: true,
  imports: [CommonModule, FormsModule, ClickOutsideDirective],
  templateUrl: './multi-select-dropdown.component.html',
  styleUrls: ['./multi-select-dropdown.component.css'],
})
export class MultiSelectDropdownComponent implements OnChanges {
  @Input({ required: true }) formFieldName = 'options';
  @Input({ required: true }) options: DriversInterface[] = [];
  @Input({ required: true }) prompt = 'Select one or more options';

  @Output() selectionChange: EventEmitter<string[]> = new EventEmitter<string[]>();
  @ViewChild('dropdownMenu') dropdownMenu!: ElementRef;

  selectedOptions: string[] = [];

  constructor(private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['options']) {
      this.selectedOptions = []; // Reset selected options if options list changes
    }
  }

  toggleDropdown() {
    // Toggle dropdown visibility
    const dropdownMenu = this.dropdownMenu.nativeElement;
    if (dropdownMenu.classList.contains('hidden')) {
      this.showDropdown();
    } else {
      this.hideDropdown();
    }
  }

  private showDropdown() {
    this.renderer.removeClass(this.dropdownMenu.nativeElement, 'hidden');
    this.renderer.addClass(this.dropdownMenu.nativeElement, 'block');
  }

  private hideDropdown() {
    this.renderer.removeClass(this.dropdownMenu.nativeElement, 'block');
    this.renderer.addClass(this.dropdownMenu.nativeElement, 'hidden');
  }
}
