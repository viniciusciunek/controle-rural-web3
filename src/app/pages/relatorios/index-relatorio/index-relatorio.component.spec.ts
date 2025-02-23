import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexRelatorioComponent } from './index-relatorio.component';

describe('IndexRelatorioComponent', () => {
  let component: IndexRelatorioComponent;
  let fixture: ComponentFixture<IndexRelatorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexRelatorioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexRelatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
