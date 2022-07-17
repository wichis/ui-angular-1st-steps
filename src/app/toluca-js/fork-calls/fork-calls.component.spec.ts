import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForkCallsComponent } from './fork-calls.component';

describe('ForkCallsComponent', () => {
  let component: ForkCallsComponent;
  let fixture: ComponentFixture<ForkCallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForkCallsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForkCallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
