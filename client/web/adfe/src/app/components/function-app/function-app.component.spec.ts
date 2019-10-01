import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionAppComponent } from './function-app.component';

describe('FunctionAppComponent', () => {
  let component: FunctionAppComponent;
  let fixture: ComponentFixture<FunctionAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
