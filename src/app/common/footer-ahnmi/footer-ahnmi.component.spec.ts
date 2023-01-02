import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterAhnmiComponent } from './footer-ahnmi.component';

describe('FooterAhnmiComponent', () => {
  let component: FooterAhnmiComponent;
  let fixture: ComponentFixture<FooterAhnmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterAhnmiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterAhnmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
