import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapRoutingPanelComponent } from './map-routing-panel.component';

describe('MapRoutingPanelComponent', () => {
  let component: MapRoutingPanelComponent;
  let fixture: ComponentFixture<MapRoutingPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapRoutingPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MapRoutingPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
