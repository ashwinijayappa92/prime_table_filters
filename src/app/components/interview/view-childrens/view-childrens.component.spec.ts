import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildrensComponent } from './view-childrens.component';

describe('ViewChildrensComponent', () => {
  let component: ViewChildrensComponent;
  let fixture: ComponentFixture<ViewChildrensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewChildrensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChildrensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
