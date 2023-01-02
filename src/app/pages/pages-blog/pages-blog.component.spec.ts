import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesBlogComponent } from './pages-blog.component';

describe('PagesBlogComponent', () => {
  let component: PagesBlogComponent;
  let fixture: ComponentFixture<PagesBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesBlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
