import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AbstractDashboardComponent } from './abstract-dashboard.component';

describe('AbstractDashboardComponent', () => {
  let component: AbstractDashboardComponent;
  let fixture: ComponentFixture<AbstractDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbstractDashboardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AbstractDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
