import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrantComponent } from './integrant.component';

describe('IntegrantComponent', () => {
  let component: IntegrantComponent;
  let fixture: ComponentFixture<IntegrantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntegrantComponent]
    });
    fixture = TestBed.createComponent(IntegrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
