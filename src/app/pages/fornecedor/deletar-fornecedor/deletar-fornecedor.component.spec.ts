import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarFornecedorComponent } from './deletar-fornecedor.component';

describe('DeletarFornecedorComponent', () => {
  let component: DeletarFornecedorComponent;
  let fixture: ComponentFixture<DeletarFornecedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeletarFornecedorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletarFornecedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
