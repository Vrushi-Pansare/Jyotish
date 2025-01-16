import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyhoroscopeComponent } from './dailyhoroscope.component';

describe('DailyhoroscopeComponent', () => {
  let component: DailyhoroscopeComponent;
  let fixture: ComponentFixture<DailyhoroscopeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DailyhoroscopeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyhoroscopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
