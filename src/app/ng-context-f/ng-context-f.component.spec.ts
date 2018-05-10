import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContextFComponent } from './ng-context-f.component';

describe('NgContextFComponent', () => {
  let component: NgContextFComponent;
  let fixture: ComponentFixture<NgContextFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgContextFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgContextFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
