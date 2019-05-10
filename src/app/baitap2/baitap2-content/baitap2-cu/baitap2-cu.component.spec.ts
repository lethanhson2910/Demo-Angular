import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap2CUComponent } from './baitap2-cu.component';

describe('Baitap2CUComponent', () => {
  let component: Baitap2CUComponent;
  let fixture: ComponentFixture<Baitap2CUComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap2CUComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap2CUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
