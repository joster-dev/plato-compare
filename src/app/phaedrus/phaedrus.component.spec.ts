import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhaedrusComponent } from './phaedrus.component';

describe('PhaedrusComponent', () => {
  let component: PhaedrusComponent;
  let fixture: ComponentFixture<PhaedrusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhaedrusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhaedrusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
