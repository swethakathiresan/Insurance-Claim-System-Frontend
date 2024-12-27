import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyuserComponent } from './policyuser.component';

describe('PolicyuserComponent', () => {
  let component: PolicyuserComponent;
  let fixture: ComponentFixture<PolicyuserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PolicyuserComponent]
    });
    fixture = TestBed.createComponent(PolicyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
