import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupViewComponent } from './startup-view.component';

describe('StartupViewComponent', () => {
  let component: StartupViewComponent;
  let fixture: ComponentFixture<StartupViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartupViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
