import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetGameCard } from './set-game-card';

describe('SetGameCard', () => {
  let component: SetGameCard;
  let fixture: ComponentFixture<SetGameCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetGameCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetGameCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
