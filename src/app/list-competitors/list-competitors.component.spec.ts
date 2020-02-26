import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCompetitorsComponent } from './list-competitors.component';

describe('ListCompetitorsComponent', () => {
  let component: ListCompetitorsComponent;
  let fixture: ComponentFixture<ListCompetitorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCompetitorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCompetitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
