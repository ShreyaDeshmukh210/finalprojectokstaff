import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewregistrationviewComponent } from './newregistrationview.component';

describe('NewregistrationviewComponent', () => {
  let component: NewregistrationviewComponent;
  let fixture: ComponentFixture<NewregistrationviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewregistrationviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewregistrationviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
