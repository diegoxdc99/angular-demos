import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSelectionExampleComponent } from './custom-selection-example.component';

describe('CustomSelectionExampleComponent', () => {
  let component: CustomSelectionExampleComponent;
  let fixture: ComponentFixture<CustomSelectionExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomSelectionExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomSelectionExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
