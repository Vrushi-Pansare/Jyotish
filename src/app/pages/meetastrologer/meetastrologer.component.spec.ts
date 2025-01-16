import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetastrologerComponent } from './meetastrologer.component';

describe('MeetastrologerComponent', () => {
  let component: MeetastrologerComponent;
  let fixture: ComponentFixture<MeetastrologerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeetastrologerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetastrologerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
