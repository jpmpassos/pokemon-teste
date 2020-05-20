import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaBaralhosComponent } from './lista-baralhos.component';

describe('ListaBaralhosComponent', () => {
  let component: ListaBaralhosComponent;
  let fixture: ComponentFixture<ListaBaralhosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaBaralhosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaBaralhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
