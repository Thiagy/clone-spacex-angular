import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanspaceflightComponent } from './humanspaceflight.component';

describe('HumanspaceflightComponent', () => {
  let component: HumanspaceflightComponent;
  let fixture: ComponentFixture<HumanspaceflightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HumanspaceflightComponent]
    });
    fixture = TestBed.createComponent(HumanspaceflightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
