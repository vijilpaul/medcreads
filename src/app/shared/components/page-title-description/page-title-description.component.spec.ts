import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTitleDescriptionComponent } from './page-title-description.component';

describe('PageTitleDescriptionComponent', () => {
  let component: PageTitleDescriptionComponent;
  let fixture: ComponentFixture<PageTitleDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTitleDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTitleDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
