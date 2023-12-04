import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttractionListComponent } from './list.component';

describe('AttractionListComponent', () => {
  let component: AttractionListComponent;
  let fixture: ComponentFixture<AttractionListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttractionListComponent]
    });
    fixture = TestBed.createComponent(AttractionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
