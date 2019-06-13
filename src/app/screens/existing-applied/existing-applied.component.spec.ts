import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingAppliedComponent } from './existing-applied.component';

describe('ExistingAppliedComponent', () => {
  let component: ExistingAppliedComponent;
  let fixture: ComponentFixture<ExistingAppliedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistingAppliedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingAppliedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
