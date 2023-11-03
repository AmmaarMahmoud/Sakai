import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStorsComponent } from './add-stors.component';

describe('AddStorsComponent', () => {
  let component: AddStorsComponent;
  let fixture: ComponentFixture<AddStorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddStorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
