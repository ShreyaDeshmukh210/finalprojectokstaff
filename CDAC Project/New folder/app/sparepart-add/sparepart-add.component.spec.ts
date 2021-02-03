import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparepartAddComponent } from './sparepart-add.component';

describe('SparepartAddComponent', () => {
  let component: SparepartAddComponent;
  let fixture: ComponentFixture<SparepartAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SparepartAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SparepartAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
