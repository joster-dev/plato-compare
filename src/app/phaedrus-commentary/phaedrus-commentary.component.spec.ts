import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhaedrusCommentaryComponent } from './phaedrus-commentary.component';

describe('PhaedrusCommentaryComponent', () => {
  let component: PhaedrusCommentaryComponent;
  let fixture: ComponentFixture<PhaedrusCommentaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhaedrusCommentaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhaedrusCommentaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
