import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TripManagementComponent } from './trip-management.component';

describe('TripManagementComponent', () => {
  let component: TripManagementComponent;
  let fixture: ComponentFixture<TripManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TripManagementComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TripManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
