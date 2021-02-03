import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerchallemployeeComponent } from './serchallemployee.component';

describe('SerchallemployeeComponent', () => {
  let component: SerchallemployeeComponent;
  let fixture: ComponentFixture<SerchallemployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerchallemployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerchallemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
