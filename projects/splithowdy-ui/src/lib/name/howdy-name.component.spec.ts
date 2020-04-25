import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowdyNameComponent } from './howdy-name.component';

describe('HowdyNameComponent', () => {
  let component: HowdyNameComponent;
  let fixture: ComponentFixture<HowdyNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowdyNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowdyNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
