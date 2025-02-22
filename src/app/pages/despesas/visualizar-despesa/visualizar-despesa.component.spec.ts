import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarDespesaComponent } from './visualizar-despesa.component';

describe('VisualizarDespesaComponent', () => {
  let component: VisualizarDespesaComponent;
  let fixture: ComponentFixture<VisualizarDespesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizarDespesaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizarDespesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
