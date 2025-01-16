import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyHoroscopeDetailsComponent } from './daily-horoscope-details.component';

describe('DailyHoroscopeDetailsComponent', () => {
  let component: DailyHoroscopeDetailsComponent;
  let fixture: ComponentFixture<DailyHoroscopeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DailyHoroscopeDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyHoroscopeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
