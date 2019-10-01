import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionAppsListComponent } from './function-apps-list.component';

describe('FunctionAppsListComponent', () => {
  let component: FunctionAppsListComponent;
  let fixture: ComponentFixture<FunctionAppsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionAppsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionAppsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
