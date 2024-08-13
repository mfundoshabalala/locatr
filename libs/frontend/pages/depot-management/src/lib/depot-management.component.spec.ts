import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DepotManagementComponent } from './depot-management.component';

describe('DepotManagementComponent', () => {
  let component: DepotManagementComponent;
  let fixture: ComponentFixture<DepotManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepotManagementComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DepotManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
