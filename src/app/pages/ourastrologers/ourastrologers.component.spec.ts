import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurastrologersComponent } from './ourastrologers.component';

describe('OurastrologersComponent', () => {
  let component: OurastrologersComponent;
  let fixture: ComponentFixture<OurastrologersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OurastrologersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurastrologersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
