import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetDurationCard } from './set-duration-card';

describe('SetDurationCard', () => {
  let component: SetDurationCard;
  let fixture: ComponentFixture<SetDurationCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetDurationCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetDurationCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
