import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithusComponent } from './withus.component';

describe('WithusComponent', () => {
  let component: WithusComponent;
  let fixture: ComponentFixture<WithusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WithusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
