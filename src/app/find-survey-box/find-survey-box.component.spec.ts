import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindSurveyBoxComponent } from './find-survey-box.component';

describe('FindSurveyBoxComponent', () => {
  let component: FindSurveyBoxComponent;
  let fixture: ComponentFixture<FindSurveyBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindSurveyBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindSurveyBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
