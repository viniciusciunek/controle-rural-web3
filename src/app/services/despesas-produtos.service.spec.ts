import { TestBed } from '@angular/core/testing';

import { DespesasProdutosService } from './despesas-produtos.service';

describe('DespesasProdutosService', () => {
  let service: DespesasProdutosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DespesasProdutosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
