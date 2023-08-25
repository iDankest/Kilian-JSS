import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoAComponent } from './producto-a.component';

describe('ProductoAComponent', () => {
  let component: ProductoAComponent;
  let fixture: ComponentFixture<ProductoAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductoAComponent]
    });
    fixture = TestBed.createComponent(ProductoAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
