import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorsDetailsComponent } from './stors-details.component';

describe('StorsDetailsComponent', () => {
  let component: StorsDetailsComponent;
  let fixture: ComponentFixture<StorsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
