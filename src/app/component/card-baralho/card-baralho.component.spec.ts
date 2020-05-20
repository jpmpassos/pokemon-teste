import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBaralhoComponent } from './card-baralho.component';

describe('CardBaralhoComponent', () => {
  let component: CardBaralhoComponent;
  let fixture: ComponentFixture<CardBaralhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardBaralhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardBaralhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
