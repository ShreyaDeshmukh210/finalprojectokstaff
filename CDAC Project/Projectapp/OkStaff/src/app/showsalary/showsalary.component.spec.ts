import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsalaryComponent } from './showsalary.component';

describe('ShowsalaryComponent', () => {
  let component: ShowsalaryComponent;
  let fixture: ComponentFixture<ShowsalaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowsalaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowsalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
