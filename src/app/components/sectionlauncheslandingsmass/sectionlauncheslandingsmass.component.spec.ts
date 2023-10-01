import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionlauncheslandingsmassComponent } from './sectionlauncheslandingsmass.component';

describe('SectionlauncheslandingsmassComponent', () => {
  let component: SectionlauncheslandingsmassComponent;
  let fixture: ComponentFixture<SectionlauncheslandingsmassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionlauncheslandingsmassComponent]
    });
    fixture = TestBed.createComponent(SectionlauncheslandingsmassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
