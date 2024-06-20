import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapSearchInputComponent } from './map-search-input.component';

describe('MapSearchBarComponent', () => {
  let component: MapSearchInputComponent;
  let fixture: ComponentFixture<MapSearchInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapSearchInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MapSearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
