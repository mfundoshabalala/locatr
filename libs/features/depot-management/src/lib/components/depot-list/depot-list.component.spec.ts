import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DepotListComponent } from './depot-list.component';

describe('DepotListComponent', () => {
  let component: DepotListComponent;
  let fixture: ComponentFixture<DepotListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepotListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DepotListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
