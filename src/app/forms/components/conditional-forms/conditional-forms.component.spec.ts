import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalFormsComponent } from './conditional-forms.component';

describe('ConditionalFormsComponent', () => {
  let component: ConditionalFormsComponent;
  let fixture: ComponentFixture<ConditionalFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConditionalFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionalFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
