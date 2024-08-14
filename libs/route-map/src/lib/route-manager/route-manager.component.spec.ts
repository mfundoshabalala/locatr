import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouteManagerComponent } from './route-manager.component';

describe('RouteManagerComponent', () => {
  let component: RouteManagerComponent;
  let fixture: ComponentFixture<RouteManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteManagerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RouteManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
