import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionmedlinComponent } from './sectionmedlin.component';

describe('SectionmedlinComponent', () => {
  let component: SectionmedlinComponent;
  let fixture: ComponentFixture<SectionmedlinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionmedlinComponent]
    });
    fixture = TestBed.createComponent(SectionmedlinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
