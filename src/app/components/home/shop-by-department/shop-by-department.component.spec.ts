import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopByDepartmentComponent } from './shop-by-department.component';

describe('ShopByDepartmentComponent', () => {
  let component: ShopByDepartmentComponent;
  let fixture: ComponentFixture<ShopByDepartmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopByDepartmentComponent]
    });
    fixture = TestBed.createComponent(ShopByDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
