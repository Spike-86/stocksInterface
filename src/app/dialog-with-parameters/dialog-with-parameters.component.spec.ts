import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogWithParametersComponent } from './dialog-with-parameters.component';

describe('DialogWithParametersComponent', () => {
  let component: DialogWithParametersComponent;
  let fixture: ComponentFixture<DialogWithParametersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogWithParametersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogWithParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
