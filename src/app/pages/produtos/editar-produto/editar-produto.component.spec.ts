import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarProdutoComponent } from './editar-produto.component';

describe('EditarProdutoComponent', () => {
  let component: EditarProdutoComponent;
  let fixture: ComponentFixture<EditarProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarProdutoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
