import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetProductsClientsComponent } from './get-products-clients.component';

describe('GetProductsClientsComponent', () => {
  let component: GetProductsClientsComponent;
  let fixture: ComponentFixture<GetProductsClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetProductsClientsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GetProductsClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
