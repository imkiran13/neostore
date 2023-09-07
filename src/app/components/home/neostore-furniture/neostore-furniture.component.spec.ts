import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeostoreFurnitureComponent } from './neostore-furniture.component';

describe('NeostoreFurnitureComponent', () => {
  let component: NeostoreFurnitureComponent;
  let fixture: ComponentFixture<NeostoreFurnitureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NeostoreFurnitureComponent]
    });
    fixture = TestBed.createComponent(NeostoreFurnitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
