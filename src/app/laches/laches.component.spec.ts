import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LachesComponent } from './laches.component';

describe('LachesComponent', () => {
  let component: LachesComponent;
  let fixture: ComponentFixture<LachesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LachesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
