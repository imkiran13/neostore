import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnitureForBudgetComponent } from './furniture-for-budget.component';

describe('FurnitureForBudgetComponent', () => {
  let component: FurnitureForBudgetComponent;
  let fixture: ComponentFixture<FurnitureForBudgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FurnitureForBudgetComponent]
    });
    fixture = TestBed.createComponent(FurnitureForBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
