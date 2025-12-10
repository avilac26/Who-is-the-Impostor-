import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetCategoryCard } from './set-category-card';

describe('SetCategoryCard', () => {
  let component: SetCategoryCard;
  let fixture: ComponentFixture<SetCategoryCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetCategoryCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetCategoryCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
