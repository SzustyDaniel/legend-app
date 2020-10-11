import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorTypeSelectionComponent } from './monitor-type-selection.component';

describe('MonitorTypeSelectionComponent', () => {
  let component: MonitorTypeSelectionComponent;
  let fixture: ComponentFixture<MonitorTypeSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitorTypeSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorTypeSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
