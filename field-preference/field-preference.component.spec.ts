import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldPreferenceComponent } from './field-preference.component';

describe('FieldPreferenceComponent', () => {
  let component: FieldPreferenceComponent;
  let fixture: ComponentFixture<FieldPreferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldPreferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldPreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
