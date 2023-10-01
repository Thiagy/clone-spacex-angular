import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionhomepageComponent } from './sectionhomepage.component';

describe('SectionhomepageComponent', () => {
  let component: SectionhomepageComponent;
  let fixture: ComponentFixture<SectionhomepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionhomepageComponent]
    });
    fixture = TestBed.createComponent(SectionhomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
