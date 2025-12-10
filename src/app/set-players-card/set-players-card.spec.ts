import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetPlayersCard } from './set-players-card';

describe('SetPlayersCard', () => {
  let component: SetPlayersCard;
  let fixture: ComponentFixture<SetPlayersCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetPlayersCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetPlayersCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
