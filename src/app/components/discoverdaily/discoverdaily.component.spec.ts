import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverdailyComponent } from './discoverdaily.component';

describe('DiscoverdailyComponent', () => {
  let component: DiscoverdailyComponent;
  let fixture: ComponentFixture<DiscoverdailyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DiscoverdailyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscoverdailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
