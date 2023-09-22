import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRegistroComponent } from './lista-registro.component';

describe('ListaRegistroComponent', () => {
  let component: ListaRegistroComponent;
  let fixture: ComponentFixture<ListaRegistroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaRegistroComponent]
    });
    fixture = TestBed.createComponent(ListaRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
