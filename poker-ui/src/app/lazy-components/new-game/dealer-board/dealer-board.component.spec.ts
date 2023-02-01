import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerBoardComponent } from './dealer-board.component';

describe('DealerBoardComponent', () => {
  let component: DealerBoardComponent;
  let fixture: ComponentFixture<DealerBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealerBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DealerBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
