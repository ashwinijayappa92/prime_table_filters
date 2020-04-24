import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticalUpdateComponent } from './artical-update.component';

describe('ArticalUpdateComponent', () => {
  let component: ArticalUpdateComponent;
  let fixture: ComponentFixture<ArticalUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticalUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticalUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
