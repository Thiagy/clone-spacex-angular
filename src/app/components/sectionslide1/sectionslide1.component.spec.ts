import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sectionslide1Component } from './sectionslide1.component';

describe('Sectionslide1Component', () => {
  let component: Sectionslide1Component;
  let fixture: ComponentFixture<Sectionslide1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Sectionslide1Component]
    });
    fixture = TestBed.createComponent(Sectionslide1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
