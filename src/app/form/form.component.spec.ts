import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttractionFormComponent } from './form.component';

describe('AttractionFormComponent', () => {
  let component: AttractionFormComponent;
  let fixture: ComponentFixture<AttractionFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttractionFormComponent]
    });
    fixture = TestBed.createComponent(AttractionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
