import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesFullBlogComponent } from './pages-full-blog.component';

describe('PagesFullBlogComponent', () => {
  let component: PagesFullBlogComponent;
  let fixture: ComponentFixture<PagesFullBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesFullBlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesFullBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
