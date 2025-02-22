import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexDespesaComponent } from './index-despesa.component';

describe('IndexDespesaComponent', () => {
  let component: IndexDespesaComponent;
  let fixture: ComponentFixture<IndexDespesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexDespesaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexDespesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
