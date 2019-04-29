import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Home123Component } from './home123.component';

describe('Home123Component', () => {
  let component: Home123Component;
  let fixture: ComponentFixture<Home123Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Home123Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Home123Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
