import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DepotFormComponent } from './depot-form.component';

describe('DepotFormComponent', () => {
  let component: DepotFormComponent;
  let fixture: ComponentFixture<DepotFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepotFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DepotFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
