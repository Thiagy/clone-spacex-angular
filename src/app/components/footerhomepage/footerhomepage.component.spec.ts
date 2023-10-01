import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterhomepageComponent } from './footerhomepage.component';

describe('FooterhomepageComponent', () => {
  let component: FooterhomepageComponent;
  let fixture: ComponentFixture<FooterhomepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterhomepageComponent]
    });
    fixture = TestBed.createComponent(FooterhomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
