import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QdayComponent } from './qday.component';

describe('QdayComponent', () => {
  let component: QdayComponent;
  let fixture: ComponentFixture<QdayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QdayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
