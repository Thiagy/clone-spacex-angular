import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide2Component } from './slide2.component';

describe('Slide2Component', () => {
  let component: Slide2Component;
  let fixture: ComponentFixture<Slide2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Slide2Component]
    });
    fixture = TestBed.createComponent(Slide2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
