import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterpagesecondaryComponent } from './footerpagesecondary.component';

describe('FooterpagesecondaryComponent', () => {
  let component: FooterpagesecondaryComponent;
  let fixture: ComponentFixture<FooterpagesecondaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterpagesecondaryComponent]
    });
    fixture = TestBed.createComponent(FooterpagesecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
