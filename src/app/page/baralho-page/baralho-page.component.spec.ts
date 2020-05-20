import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaralhoPageComponent } from './baralho-page.component';

describe('BaralhoPageComponent', () => {
  let component: BaralhoPageComponent;
  let fixture: ComponentFixture<BaralhoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaralhoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaralhoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
