import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesBaralhoComponent } from './detalhes-baralho.component';

describe('DetalhesBaralhoComponent', () => {
  let component: DetalhesBaralhoComponent;
  let fixture: ComponentFixture<DetalhesBaralhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesBaralhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesBaralhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
