import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetImpostorsCard } from './set-impostors-card';

describe('SetImpostorsCard', () => {
  let component: SetImpostorsCard;
  let fixture: ComponentFixture<SetImpostorsCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetImpostorsCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetImpostorsCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
