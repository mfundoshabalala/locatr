import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouteOptimisationComponent } from './route-optimisation.component';

describe('RouteOptimisationComponent', () => {
  let component: RouteOptimisationComponent;
  let fixture: ComponentFixture<RouteOptimisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteOptimisationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RouteOptimisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
