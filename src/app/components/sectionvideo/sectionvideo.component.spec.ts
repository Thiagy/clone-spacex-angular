import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionvideoComponent } from './sectionvideo.component';

describe('SectionvideoComponent', () => {
  let component: SectionvideoComponent;
  let fixture: ComponentFixture<SectionvideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionvideoComponent]
    });
    fixture = TestBed.createComponent(SectionvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
