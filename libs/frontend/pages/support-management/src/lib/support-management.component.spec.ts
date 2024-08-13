import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SupportManagementComponent } from './support-management.component';

describe('SupportManagementComponent', () => {
  let component: SupportManagementComponent;
  let fixture: ComponentFixture<SupportManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupportManagementComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SupportManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
