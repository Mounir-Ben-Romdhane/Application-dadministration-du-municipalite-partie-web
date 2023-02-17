import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeoplelistComponent } from './peoplelist.component';

describe('PeoplelistComponent', () => {
  let component: PeoplelistComponent;
  let fixture: ComponentFixture<PeoplelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeoplelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeoplelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
