import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexFornecedorComponent } from './index-fornecedor.component';

describe('IndexFornecedorComponent', () => {
  let component: IndexFornecedorComponent;
  let fixture: ComponentFixture<IndexFornecedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexFornecedorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexFornecedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
