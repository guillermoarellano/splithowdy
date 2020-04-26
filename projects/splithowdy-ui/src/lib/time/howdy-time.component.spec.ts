import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowdyTimeComponent } from './howdy-time.component';

describe('HowdyTimeComponent', () => {
  let component: HowdyTimeComponent;
  let fixture: ComponentFixture<HowdyTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowdyTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowdyTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
