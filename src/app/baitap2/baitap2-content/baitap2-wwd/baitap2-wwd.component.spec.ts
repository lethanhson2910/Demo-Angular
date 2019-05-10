import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap2WWDComponent } from './baitap2-wwd.component';

describe('Baitap2WWDComponent', () => {
  let component: Baitap2WWDComponent;
  let fixture: ComponentFixture<Baitap2WWDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap2WWDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap2WWDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
