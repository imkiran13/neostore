import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromOurBlogComponent } from './from-our-blog.component';

describe('FromOurBlogComponent', () => {
  let component: FromOurBlogComponent;
  let fixture: ComponentFixture<FromOurBlogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FromOurBlogComponent]
    });
    fixture = TestBed.createComponent(FromOurBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
