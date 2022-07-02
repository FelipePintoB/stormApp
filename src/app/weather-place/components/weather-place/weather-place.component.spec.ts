import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherPlaceComponent } from './weather-place.component';

describe('WeatherPlaceComponent', () => {
  let component: WeatherPlaceComponent;
  let fixture: ComponentFixture<WeatherPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherPlaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
