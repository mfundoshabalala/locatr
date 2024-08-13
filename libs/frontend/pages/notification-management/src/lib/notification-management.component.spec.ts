import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotificationManagementComponent } from './notification-management.component';

describe('NotificationManagementComponent', () => {
  let component: NotificationManagementComponent;
  let fixture: ComponentFixture<NotificationManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationManagementComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NotificationManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
