import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesRegulatoryComponent } from './pages-regulatory.component';

describe('PagesRegulatoryComponent', () => {
  let component: PagesRegulatoryComponent;
  let fixture: ComponentFixture<PagesRegulatoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesRegulatoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesRegulatoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
