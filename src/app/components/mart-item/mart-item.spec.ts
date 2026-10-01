import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MartItem } from './mart-item';

describe('MartItem', () => {
  let component: MartItem;
  let fixture: ComponentFixture<MartItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MartItem],
    }).compileComponents();

    fixture = TestBed.createComponent(MartItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
