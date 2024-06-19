import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapSearchBarComponent } from './map-search-bar.component';

describe('MapSearchBarComponent', () => {
  let component: MapSearchBarComponent;
  let fixture: ComponentFixture<MapSearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapSearchBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MapSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
