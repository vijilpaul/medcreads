import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganiztonsComponent } from './organiztons.component';

describe('OrganiztonsComponent', () => {
  let component: OrganiztonsComponent;
  let fixture: ComponentFixture<OrganiztonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganiztonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganiztonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
