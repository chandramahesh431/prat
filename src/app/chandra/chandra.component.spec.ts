import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChandraComponent } from './chandra.component';

describe('ChandraComponent', () => {
  let component: ChandraComponent;
  let fixture: ComponentFixture<ChandraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChandraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChandraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
