import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KrepselisComponent } from './krepselis.component';

describe('KrepselisComponent', () => {
  let component: KrepselisComponent;
  let fixture: ComponentFixture<KrepselisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KrepselisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KrepselisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});