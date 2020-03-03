import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCardComponent } from './sub-card.component';

describe('SubCardComponent', () => {
  let component: SubCardComponent;
  let fixture: ComponentFixture<SubCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
