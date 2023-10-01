import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Falcon9Component } from './falcon9.component';

describe('Falcon9Component', () => {
  let component: Falcon9Component;
  let fixture: ComponentFixture<Falcon9Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Falcon9Component]
    });
    fixture = TestBed.createComponent(Falcon9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
