import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwizzleComponent } from './twizzle.component';

describe('TwizzleComponent', () => {
  let component: TwizzleComponent;
  let fixture: ComponentFixture<TwizzleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwizzleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwizzleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
