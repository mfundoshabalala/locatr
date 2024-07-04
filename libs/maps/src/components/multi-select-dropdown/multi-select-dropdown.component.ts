import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DriversInterface } from '../../interfaces';

@Component({
  selector: 'lib-multi-select',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './multi-select-dropdown.component.html',
  styleUrls: ['./multi-select-dropdown.component.css'],
})
export class MultiSelectDropdownComponent implements OnInit, OnChanges {
  @Input() formFieldName = 'options';
  @Input() options: DriversInterface[] = [];
  @Input() prompt = 'Select one or more options';
  @Output() selectionChange: EventEmitter<string[]> = new EventEmitter<string[]>();

  isJsEnabled = false;
  selectedOptions: string[] = [];

  ngOnInit() {
    this.isJsEnabled = true;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['options']) {
      this.selectedOptions = []; // Reset selected options if options list changes
    }
  }

  handleChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const option = input.value;
    const isChecked = input.checked;

    if (isChecked) {
      this.selectedOptions.push(option);
    } else {
      this.selectedOptions = this.selectedOptions.filter((item) => item !== option);
    }

    this.selectionChange.emit(this.selectedOptions);
  }

  handleSelectAllClick(event: MouseEvent) {
    event.preventDefault();

    this.selectedOptions = this.options.map((option) => option.driversID as string);
    this.selectionChange.emit(this.selectedOptions);
  }

  handleClearSelectionClick(event: MouseEvent) {
    event.preventDefault();

    this.selectedOptions = [];
    this.selectionChange.emit(this.selectedOptions);
  }

  toggleDropdown() {
    // This method is just a placeholder to trigger the dropdown toggle in the template
  }
}
