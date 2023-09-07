import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedItFastComponent } from './need-it-fast.component';

describe('NeedItFastComponent', () => {
  let component: NeedItFastComponent;
  let fixture: ComponentFixture<NeedItFastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NeedItFastComponent]
    });
    fixture = TestBed.createComponent(NeedItFastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
