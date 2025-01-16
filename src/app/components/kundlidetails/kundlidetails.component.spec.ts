import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KundlidetailsComponent } from './kundlidetails.component';

describe('KundlidetailsComponent', () => {
  let component: KundlidetailsComponent;
  let fixture: ComponentFixture<KundlidetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KundlidetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KundlidetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
