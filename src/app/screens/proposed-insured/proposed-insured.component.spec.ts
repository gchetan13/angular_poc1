import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposedInsuredComponent } from './proposed-insured.component';

describe('ProposedInsuredComponent', () => {
  let component: ProposedInsuredComponent;
  let fixture: ComponentFixture<ProposedInsuredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposedInsuredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposedInsuredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
