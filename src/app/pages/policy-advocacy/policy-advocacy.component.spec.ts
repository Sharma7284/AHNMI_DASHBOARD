import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyAdvocacyComponent } from './policy-advocacy.component';

describe('PolicyAdvocacyComponent', () => {
  let component: PolicyAdvocacyComponent;
  let fixture: ComponentFixture<PolicyAdvocacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicyAdvocacyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolicyAdvocacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
