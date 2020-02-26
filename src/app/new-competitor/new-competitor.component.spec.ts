import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCompetitorComponent } from './new-competitor.component';

describe('NewCompetitorComponent', () => {
  let component: NewCompetitorComponent;
  let fixture: ComponentFixture<NewCompetitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCompetitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCompetitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
