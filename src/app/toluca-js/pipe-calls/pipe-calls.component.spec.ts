import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeCallsComponent } from './pipe-calls.component';

describe('PipeCallsComponent', () => {
  let component: PipeCallsComponent;
  let fixture: ComponentFixture<PipeCallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeCallsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeCallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
