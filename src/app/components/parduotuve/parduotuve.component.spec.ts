import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParduotuveComponent } from './parduotuve.component';

describe('ParduotuveComponent', () => {
  let component: ParduotuveComponent;
  let fixture: ComponentFixture<ParduotuveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParduotuveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParduotuveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});