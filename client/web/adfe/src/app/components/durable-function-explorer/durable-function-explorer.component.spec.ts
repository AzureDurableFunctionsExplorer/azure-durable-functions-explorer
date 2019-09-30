import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DurableFunctionExplorerComponent } from './durable-function-explorer.component';

describe('DurableFunctionExplorerComponent', () => {
  let component: DurableFunctionExplorerComponent;
  let fixture: ComponentFixture<DurableFunctionExplorerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DurableFunctionExplorerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DurableFunctionExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
