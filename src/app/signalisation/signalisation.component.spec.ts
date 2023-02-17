import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalisationComponent } from './signalisation.component';

describe('SignalisationComponent', () => {
  let component: SignalisationComponent;
  let fixture: ComponentFixture<SignalisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignalisationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignalisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
