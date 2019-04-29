import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFormNewComponent } from './template-form-new.component';

describe('TemplateFormNewComponent', () => {
  let component: TemplateFormNewComponent;
  let fixture: ComponentFixture<TemplateFormNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateFormNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateFormNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
