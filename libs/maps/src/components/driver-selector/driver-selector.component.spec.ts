import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DriverSelectorComponent } from './driver-selector.component';

describe('DriverSelectorComponent', () => {
  let component: DriverSelectorComponent;
  let fixture: ComponentFixture<DriverSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DriverSelectorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DriverSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
