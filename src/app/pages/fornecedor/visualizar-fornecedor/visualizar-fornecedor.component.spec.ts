import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarFornecedorComponent } from './visualizar-fornecedor.component';

describe('VisualizarFornecedorComponent', () => {
  let component: VisualizarFornecedorComponent;
  let fixture: ComponentFixture<VisualizarFornecedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizarFornecedorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizarFornecedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
