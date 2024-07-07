import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapButtonPanelComponent } from './map-button-panel.component';

describe('MapLegendComponent', () => {
  let component: MapButtonPanelComponent;
  let fixture: ComponentFixture<MapButtonPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapButtonPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MapButtonPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
