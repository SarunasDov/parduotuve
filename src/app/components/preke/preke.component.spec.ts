import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrekeComponent } from './preke.component';

describe('PrekeComponent', () => {
  let component: PrekeComponent;
  let fixture: ComponentFixture<PrekeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrekeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrekeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});